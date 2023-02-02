const express = require("express");
const router = express.Router();
const fs = require("fs");
const MovieModel = require("../Models/MovieModel");

const videoFolderPath =
  "C:/Users/danik/OneDrive/Desktop/Weblap/Projects/Streaming/client/public/assets/DB/videos/";

router.get("/all", async (req, res) => {
  const movies = await MovieModel.find({}).sort({ title: "ascending" });
  res.send(movies);
});

router.get("/mostLiked", async (req, res) => {
  const movies = await MovieModel.find({})
    .sort({
      likes: "descending",
    })
    .limit(4);
  res.send(movies);
});

router.get("/mostWatched", async (req, res) => {
  const movies = await MovieModel.find({})
    .sort({ views: "descending" })
    .limit(4);
  res.send(movies);
});

router.get("/newest", async (req, res) => {
  const movies = await MovieModel.find({})
    .sort({ release: "descending" })
    .limit(4);
  res.send(movies);
});

router.put("/like/:id", async (req, res) => {
  if (req.body.liked) {
    await MovieModel.findByIdAndUpdate(req.params.id, { $inc: { likes: -1 } });
  } else {
    await MovieModel.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
  }
  res.send("Liked!");
});

router.put("/view/:id", async (req, res) => {
  await MovieModel.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });
  res.send("Watched!");
});

router.get("/selected/:id", async (req, res) => {
  const movie = await MovieModel.findById(req.params.id);
  res.send(movie);
});

router.get("/stream/:id", async (req, res) => {
  const movie = await MovieModel.findById(req.params.id);
  const fileName = movie.title + movie.videoExt;

  const range = req.headers.range;

  if (!range) {
    res.status(400).send("Requires Range header");
  }

  const videoPath = videoFolderPath + fileName;
  const videoSize = fs.statSync(videoPath).size;
  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": `video/${movie.videoExt}`,
  };

  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });
  videoStream.pipe(res);
});

module.exports = router;
