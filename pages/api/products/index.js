import { withApiAuthRequired } from '@auth0/nextjs-auth0';
// import { prisma } from '@prisma/client';
import client from '../../../utils/prisma';
// import { PrismaClient } from '@prisma/client';

// const client = new PrismaClient();

// let products = [
//   {
//     name: 'zapato',
//     price: 666,
//     stock: 666,
//     img: 'https://img.lalr.co/cms/2017/12/05165632/Zapatos.jpg?size=sm',
//     details: 'zapato de calidad'
//   },
//   {
//     name: 'libro',
//     price: 3,
//     stock: 50,
//     img: 'https://i.blogs.es/aa76de/libro/1366_2000.jpg',
//     details: 'libro feo'
//   },
//   {
//     name: 'tomate',
//     price: 1,
//     stock: 25,
//     img: 'https://media.istockphoto.com/photos/tomato-picture-id174930196?k=20&m=174930196&s=612x612&w=0&h=Jb_NdxzsIVeGYEDKIQGZ_47cWpEyxb0fEowooTpnc-g=',
//     details: 'tomate bonito'
//   }
// ];
export default async function (req, res) {
  if (req.method == 'GET') {
    const products = await client.productos.findMany();
    res.status(200).json(products);
  } else {
    return test(req, res);
  }
}
// export default withApiAuthRequired(async function shows(req, res) {
const test = withApiAuthRequired(async function shows(req, res) {
  try {
    // obtener productos
    // if (req.method == 'GET') {
    //   console.log(products);
    //   res.status(200).json(products);
    // }
    // crear productos
    if (req.method == 'POST') {
      // products.push(JSON.parse(req.body));
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
      const { name, price, stock, img, details } = req.body;
      let { id } = req.body;
      id = Number(id);
      const prismaRes = await client.productos.update({
        where: { id },
        data: { name, price, stock, img, details }
      });
      res.status(202).json(prismaRes);
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
