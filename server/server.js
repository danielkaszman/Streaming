const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const UserRoutes = require("./Routes/UserRoutes");
const MovieRoutes = require("./Routes/MovieRoutes");

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(
  session({
    secret: "randomTitok",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
    },
  })
);

app.use("/userRoutes", UserRoutes);
app.use("/movieRoutes", MovieRoutes);

mongoose.connect("mongodb://localhost:27017/streaming", () => {
  console.log("Connected to Database!");
});

app.listen(3001, () => {
  console.log("Server is running...");
});
