import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import client from '../../../utils/prisma';

export default async function (req, res) {
  if (req.method == 'GET') {
    const products = await client.productos.findMany();
    res.status(200).json(products);
  } else {
    return test(req, res);
  }
}
const test = withApiAuthRequired(async function shows(req, res) {
  try {
    if (req.method == 'POST') {
      let { name, price, stock, img, details } = req.body;
      price = Number(price);
      stock = Number(stock);
      let prismaRes;
      try {
        prismaRes = await client.productos.create({
          data: { name, price, stock, img, details }
        });
      } catch (err) {
        console.error(err);
        throw new Error('falló la bdd :(');
      }
      res.status(201).json(prismaRes);
    }

    // modificar productos
    else if (req.method == 'PUT') {
      let { id, name, price, stock, img, details } = req.body;
      id = Number(id);
      price = Number(price);
      stock = Number(stock);
      try {
        const prismaRes = await client.productos.update({
          where: { id },
          data: { name, price, stock, img, details }
        });
        res.status(202).json(prismaRes);
      } catch (err) {
        console.error(err);
        res.status(error.status || 500).json({ error: error.message });
      }
    }

    // eliminar productos
    else if (req.method == 'DELETE') {
      let { id } = req.body;
      id = Number(id);
      const prismaRes = await client.productos.delete({ where: { id } });
      res.status(202).json(prismaRes);
    }
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
