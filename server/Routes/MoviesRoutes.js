const express = require("express");
const router = express.Router();
const MovieModel = require("../Models/MovieModel");

router.get("/all", async (req, res) => {
  const movies = await MovieModel.find({});
  res.send(movies);
});

router.get("/mostLiked", async (req, res) => {
  const movies = await MovieModel.find({}).sort({ likes: "descending" });
  res.send(movies);
});

router.get("/mostWatched", async (req, res) => {
  const movies = await MovieModel.find({}).sort({ views: "descending" });
  res.send(movies);
});

router.get("/newest", async (req, res) => {
  const movies = await MovieModel.find({}).sort({ release: "descending" });
  res.send(movies);
});

router.put("/like/:id", async (req, res) => {
  await MovieModel.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
  res.send("Liked!");
});

router.put("/view/:id", async (req, res) => {
  await MovieModel.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });
  res.send("Watched!");
});

router.post("/selected/:id", async (req, res) => {
  const movie = await MovieModel.findById(req.params.id);
  res.send(movie);
});
