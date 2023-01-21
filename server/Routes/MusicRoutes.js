const express = require("express");
const router = express.Router();
const fs = require("fs");
const MusicModel = require("../Models/MusicModel");

const musicFolderPath =
  "C:/Users/danik/OneDrive/Desktop/Weblap/Projects/Streaming/client/public/assets/DB/music/";

router.get("/all", async (req, res) => {
  const music = await MusicModel.find({}).sort({ title: "ascending" });
  res.send(music);
});

router.get("/mostLiked", async (req, res) => {
  const music = await MusicModel.find({})
    .sort({
      likes: "descending",
    })
    .limit(4);
  res.send(music);
});

router.get("/mostListened", async (req, res) => {
  const music = await MusicModel.find({})
    .sort({ views: "descending" })
    .limit(4);
  res.send(music);
});

router.get("/newest", async (req, res) => {
  const music = await MusicModel.find({})
    .sort({ release: "descending" })
    .limit(4);
  res.send(music);
});

router.put("/like/:id", async (req, res) => {
  await MusicModel.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } });
  res.send("Liked!");
});

router.put("/listen/:id", async (req, res) => {
  await MusicModel.findByIdAndUpdate(req.params.id, { $inc: { listens: 1 } });
  res.send("Listened!");
});

router.get("/stream/:id", async (req, res) => {
  const music = await MusicModel.findById(req.params.id);
  const fileName = music.title + music.videoExt;

  const range = req.headers.range;

  if (!range) {
    res.status(400).send("Requires Range header");
  }

  const musicPath = musicFolderPath + fileName;
  const musicSize = fs.statSync(musicPath).size;
  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, musicSize - 1);
  const contentLength = end - start + 1;
  const headers = {
    "Content-Range": `bytes ${start}-${end}/${musicSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": `audio/${music.musicExt}`,
  };

  res.writeHead(206, headers);
  const musicStream = fs.createReadStream(musicPath, { start, end });
  musicStream.pipe(res);
});

module.exports = router;
