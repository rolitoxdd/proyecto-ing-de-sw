import { withApiAuthRequired } from '@auth0/nextjs-auth0';
// import { PrismaClient } from '@prisma/client';
// const client = new PrismaClient();
let productos = [];

let products = [
  {
    name: 'zapato',
    price: 666,
    stock: 666,
    img: 'https://img.lalr.co/cms/2017/12/05165632/Zapatos.jpg?size=sm',
    details: 'zapato de calidad'
  },
  {
    name: 'libro',
    price: 3,
    stock: 50,
    img: 'https://i.blogs.es/aa76de/libro/1366_2000.jpg',
    details: 'libro feo'
  },
  {
    name: 'tomate',
    price: 1,
    stock: 25,
    img: 'https://media.istockphoto.com/photos/tomato-picture-id174930196?k=20&m=174930196&s=612x612&w=0&h=Jb_NdxzsIVeGYEDKIQGZ_47cWpEyxb0fEowooTpnc-g=',
    details: 'tomate bonito'
  }
];
export default async function (req, res) {
  if (req.method == 'GET') {
    res.status(200).json(products);
  } else {
    return test(req, res);
  }
}
// export default withApiAuthRequired(async function shows(req, res) {
const test = withApiAuthRequired(async function shows(req, res) {
  try {
    // obtener productos
    if (req.method == 'GET') {
      console.log(products);
      res.status(200).json(products);
    }

    // crear productos
    else if (req.method == 'POST') {
      products.push(JSON.parse(req.body));
      res.status(201).send();
    }

    // modificar productos
    else if (req.method == 'PUT') {
      const { id, name, price, stock } = JSON.parse(req.body);
      products[id] = {
        name,
        price,
        stock
      };
      res.status(202).send();
    }

    // eliminar productos
    else if (req.method == 'DELETE') {
      const { id } = JSON.parse(req.body);
      products.splice(id, 1);
      res.status(202).send();
    }
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
