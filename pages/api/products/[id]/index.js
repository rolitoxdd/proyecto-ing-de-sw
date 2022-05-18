import client from '../../../../utils/prisma';

export default async function getItem(req, res) {
  let { id } = req.query;
  id = Number(id);
  try {
    const prod = await client.products.findUnique({
      where: { id },
      include: { categories: true }
    });
    // const categories = await client.categoriesOnProducts.findMany({
    //   where: { productId: id }
    // });
    return res.status(200).json({ ...prod });
  } catch (err) {
    return res.status(400).json({ error: 'manda bien la cosa' });
  }
}
