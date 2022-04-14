import { withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function shows(req, res) {
  try {
    // obtener productos
    const products = [
      { name: 'zapato', price: 666 },
      { name: 'lol', price: 3 }
    ];
    res.status(200).json(products);

    // crear productos

    // modificar productos

    // eliminar productos
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
});
