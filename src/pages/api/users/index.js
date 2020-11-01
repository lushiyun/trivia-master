import { connectToDatabase } from '../../../util/mongodb';

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const users = await db
    .collection('users')
    .find({})
    .sort({ score: -1, time: 1 })
    .limit(10)
    .toArray();

  res.status(200).json(users);
};
