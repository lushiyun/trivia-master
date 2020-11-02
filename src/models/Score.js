import mongoose from 'mongoose';

const ScoreSchema = new mongoose.Schema({
  points: {
    type: Number,
  },
  seconds: {
    type: Number,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
});

export default mongoose.models.Score || mongoose.model('Score', ScoreSchema);
