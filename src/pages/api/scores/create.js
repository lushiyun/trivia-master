import { connectToDatabase } from '../../../util/mongodb';

export default async function (req, res) {
  try {
    const { db } = connectToDatabase();
    const result = await db.collection('scores').insertOne(req.body);

    res.status(201).json(result.ops);
  } catch (e) {
    res.status(500).json({ error: 'Unable to insert' });
  }
}
