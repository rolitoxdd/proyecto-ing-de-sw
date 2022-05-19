import client from '../../../../utils/prisma';

export default async function getItem(req, res) {
  let { id } = req.query;
  id = Number(id);
  try {
    const products = await client.products.findMany({
      where: {
        categories: {
          some: {
            categoryId: id
          }
        }
      },
      include: { categories: true }
    });
    return res.status(200).json({ products });
  } catch (err) {
    return res.status(400).json({ error: 'manda bien la cosa' });
  }
}
