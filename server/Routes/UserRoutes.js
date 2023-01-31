const express = require("express");
const router = express.Router();
const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");

router.post("/registrate", async (req, res) => {
  let foundUser = await UserModel.findOne({ email: req.body.email });

  if (foundUser) {
    res.send("User with this email already exists!");
    return;
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  await newUser.save();

  foundUser = await UserModel.findOne(
    { email: req.body.email },
    { password: 0 }
  );

  req.session.user = foundUser;

  res.sendStatus(200);
});

router.post("/login", async (req, res) => {
  let foundUser = await UserModel.findOne({ email: req.body.email });

  if (!foundUser) {
    res.send("Wrong email or password!");
    return;
  }

  const passwordMatch = await bcrypt.compare(
    req.body.password,
    foundUser.password
  );

  if (!passwordMatch) {
    res.send("Wrong email or password!");
    return;
  }

  foundUser = await UserModel.findOne(
    { email: req.body.email },
    { password: 0 }
  );

  req.session.user = foundUser;

  res.sendStatus(200);
});

router.get("/loggedIn", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

router.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.destroy();
    res.send("You successfully logged out!");
  } else {
    res.send("You are not logged in!");
  }
});

router.put("/changeName", async (req, res) => {
  await UserModel.findOneAndUpdate({
    email: req.body.email,
    name: req.body.newName,
  });

  const updatedUser = await UserModel.findOne(
    { email: req.body.email },
    { password: 0 }
  );
  req.session.user = updatedUser;

  res.send("Name updated!");
});

router.put("/changeEmail", async (req, res) => {
  await UserModel.findOneAndUpdate({
    email: req.body.email,
    email: req.body.newEmail,
  });

  const updatedUser = await UserModel.findOne(
    { email: req.body.newEmail },
    { password: 0 }
  );

  req.session.user = updatedUser;

  res.send("Email updated!");
});

router.put("/changePwd", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.newPwd, 10);

  await UserModel.findOneAndUpdate({
    email: req.body.email,
    password: hashedPassword,
  });

  const updatedUser = await UserModel.findOne(
    { email: req.body.email },
    { password: 0 }
  );

  req.session.user = updatedUser;

  res.send("Password updated!");
});

router.put("/likeContent/:id", async (req, res) => {
  const foundUser = await UserModel.findById(req.body.userID);

  if (foundUser.favourites.find((item) => item === req.params.id)) {
    await UserModel.findByIdAndUpdate(req.body.userID, {
      $pull: { favourites: req.params.id },
    });
  } else {
    await UserModel.findByIdAndUpdate(req.body.userID, {
      $push: { favourites: req.params.id },
    });
  }

  const updatedUser = await UserModel.findById(req.body.userID, {
    password: 0,
  });

  req.session.user = updatedUser;

  res.send("Content liked!");
});

module.exports = router;
