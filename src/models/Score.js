const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  points: Number,
  seconds: Number,
  user: mongoose.ObjectId,
});

module.exports = mongoose.models.Score || mongoose.model('Score', ScoreSchema);
