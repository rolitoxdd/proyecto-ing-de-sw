const prisma = require('./utils/prisma.js');

let products = {
  data: [
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
  ]
};
(async () => {
  await prisma.productos.createMany(products);
})();
