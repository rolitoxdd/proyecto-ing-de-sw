import client from '../../../utils/prisma';

export default async function getItem(req, res) {
  let { id } = req.query;
  id = Number(id);
  try {
    const cat = await client.categories.findUnique({
      where: { id }
    });
    if (cat) return res.status(200).json(cat);
    return res.status(404).json({ error: 'categoria no encontrada' });
  } catch (err) {
    return res.status(400).json({ error: 'manda bien la cosa' });
  }
}
