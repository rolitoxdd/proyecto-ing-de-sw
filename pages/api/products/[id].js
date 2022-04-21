import client from '../../../utils/prisma';

export default async function getItem(req, res) {
  let { id } = req.query;
  id = Number(id);
  try {
    const prod = await client.productos.findUnique({
      where: { id }
    });
    return res.status(200).json(prod);
  } catch (err) {
    return res.status(400).json({ error: 'manda bien la cosa' });
  }
}
