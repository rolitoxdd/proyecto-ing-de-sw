import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import client from '../../../utils/prisma';

export default async function (req, res) {
  if (req.method == 'GET') {
    const categories = await client.categorias.findMany();
    res.status(200).json(categories);
  } else {
    return test(req, res);
  }
}

// const test = withApiAuthRequired(async function shows(req, res) {
const test = async function shows(req, res) {
  try {
    if (req.method == 'POST') {
      let { name } = req.body;
      let prismaRes;
      try {
        prismaRes = await client.categorias.create({
          data: { name }
        });
      } catch (err) {
        console.error(err);
        throw new Error('falló la bdd :(');
      }
      res.status(201).json(prismaRes);
    }

    // modificar categorias
    else if (req.method == 'PUT') {
      let { id, name } = req.body;
      id = Number(id);
      try {
        const prismaRes = await client.categorias.update({
          where: { id },
          data: { name }
        });
        res.status(202).json(prismaRes);
      } catch (err) {
        console.error(err);
        res.status(error.status || 500).json({ error: error.message });
      }
    }

    // eliminar categorias
    else if (req.method == 'DELETE') {
      let { id } = req.body;
      id = Number(id);
      const prismaRes = await client.categorias.delete({ where: { id } });
      res.status(202).json(prismaRes);
    }
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};
