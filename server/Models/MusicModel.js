const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  musicExt: {
    type: String,
    required: false,
  },
  coverExt: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
  listens: {
    type: Number,
    required: true,
    default: 0,
  },
  release: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const MusicModel = mongoose.model("Music", MusicSchema);
module.exports = MusicModel;
