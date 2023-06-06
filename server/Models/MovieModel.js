const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  videoExt: {
    type: String,
    required: false,
  },
  coverExt: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
  views: {
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

const MovieModel = mongoose.model("Movies", MovieSchema);
module.exports = MovieModel;
