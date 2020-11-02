import dbConnect from '../../../util/dbConnect';
import Score from '../../../models/Score';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const scores = await Score.find({});
        res.status(200).json({ success: true, data: scores });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const score = await Score.create(req.body);
        res.status(201).json({ success: true, data: score });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
