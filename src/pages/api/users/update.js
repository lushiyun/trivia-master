import { connectToDatabase } from '../../../util/mongodb';

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase();
    const {
      user: { score },
    } = req.body;
  } catch (e) {}
};
