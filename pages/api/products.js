import { withApiAuthRequired } from '@auth0/nextjs-auth0';
// import { PrismaClient } from '@prisma/client';
// const client = new PrismaClient();
let productos = [];

export default withApiAuthRequired(async function shows(req, res) {
  try {
    // obtener productos
    if (req.method == 'GET') {
      // const products = await client.productos.findMany();
      res.status(200).json(productos);
    }

    // crear productos
    else if (req.method == 'POST') {
      // const { name, price, stock } = JSON.parse(req.body);
      // await client.productos.create({
      //   data: {
      //     name,
      //     price,
      //     stock
      //   }
      // });
    }

    // modificar productos
    else if (req.method == 'PUT') {
    }

    // eliminar productos
    else if (req.method == 'DELETE') {
    } else {
      res.status(400).json({ error: 'invalid method' });
    }
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
