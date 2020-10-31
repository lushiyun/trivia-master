import { connectToDatabase } from '../../util/mongodb';

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase();

    const users = await db
      .collection('users')
      .toArray();

    res.status(200).json({ users });
  } catch (e) {
    res.status(500).json({ error: 'Unable to retrieve data' });
  }
};
