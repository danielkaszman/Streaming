const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: false,
  },
  cover: {
    type: String,
    required: false,
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
    require: true,
    default: Date.now,
  },
});

const MovieModel = mongoose.model("Movies", MovieSchema);
module.exports = MovieModel;
