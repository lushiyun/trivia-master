import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase();

    const questions = await db
      .collection('questions')
      .aggregate([{ $sample: { size: 10 } }])
      .toArray();

    res.status(200).json({ questions });
  } catch (e) {
    res.status(500).json({ error: 'Unable to retrieve data' });
  }
};
