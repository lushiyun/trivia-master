import { connectToDatabase } from '../../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const scores = await db.collection('scores').find({}).toArray();

  res.json(scores);
};
