import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import client from '../../../utils/prisma';

export default async function (req, res) {
  if (req.method == 'GET') {
    const products = await client.products.findMany({
      include: { categories: true }
    });
    res.status(200).json(products);
  } else {
    return test(req, res);
  }
}
const test = withApiAuthRequired(async function shows(req, res) {
  try {
    if (req.method == 'POST') {
      let { name, price, stock, img, details, categories, enabled } = req.body;
      price = Number(price);
      stock = Number(stock);
      console.log('cat', categories);
      categories = categories.map(category => category.value);
      let prismaRes;
      try {
        prismaRes = await client.products.create({
          data: {
            name,
            price,
            stock,
            img,
            details,
            enabled,
            categories: {
              create: categories.map(catId => ({
                category: {
                  connect: {
                    id: catId
                  }
                }
              }))
            }
          }
        });
      } catch (err) {
        console.error(err);
        throw new Error('falló la bdd :(');
      }
      res.status(201).json(prismaRes);
    }

    // modificar productos
    else if (req.method == 'PUT') {
      let { id, name, price, stock, img, details, categories, enabled } =
        req.body;
      id = Number(id);
      price = Number(price);
      stock = Number(stock);
      console.log('categories', categories);
      categories = categories.map(category => category.categoryId);
      try {
        const prismaRes = await client.products.update({
          where: { id },
          data: {
            name,
            price,
            stock,
            img,
            details,
            enabled,
            categories: {
              deleteMany: {},
              create: categories.map(catId => ({
                category: {
                  connect: {
                    id: catId
                  }
                }
              }))
            }
          }
        });
        res.status(202).json(prismaRes);
      } catch (err) {
        console.error(err);
        res.status(error.status || 500).json({ error: err.message });
      }
    }

    // eliminar productos
    else if (req.method == 'DELETE') {
      let { id } = req.body;
      id = Number(id);
      const prismaRes = await client.products.delete({ where: { id } });
      res.status(202).json(prismaRes);
    }
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
