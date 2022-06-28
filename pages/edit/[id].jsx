import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

import { useState, useMemo } from 'react';
import Form from '../../components/Form';
function Edit({ productsData, categories }) {
  const router = useRouter();
  const [data, setData] = useState(productsData);
  const { id } = router.query;
  const inputs = [
    {
      label: 'name',
      type: 'text',
      value: data.name,
      required: true,
      onChange: e => setData(data => ({ ...data, name: e.target.value }))
    },
    {
      label: 'price',
      type: 'number',
      value: data.price,
      required: true,
      onChange: e => setData(data => ({ ...data, price: e.target.value }))
    },
    {
      label: 'stock',
      type: 'number',
      value: data.stock,
      required: true,
      onChange: e => setData(data => ({ ...data, stock: e.target.value }))
    },
    {
      label: 'img',
      type: 'text',
      value: data.img,
      required: true,
      onChange: e => setData(data => ({ ...data, img: e.target.value }))
    },
    {
      label: 'details',
      type: 'text',
      value: data.details,
      required: false,
      onChange: e => setData(data => ({ ...data, details: e.target.value }))
    },
    {
      label: 'enabled',
      type: 'checkbox',
      value: data.enabled,
      required: false,
      onChange: e => {
        console.log(data);
        setData(data => ({ ...data, enabled: e.target.checked }));
      }
    }
  ];

  const selects = [
    {
      label: 'categorias',
      options: categories,
      defaultValue: data.categories.map(cat => ({
        value: cat.categoryId,
        label: categories.find(categ => categ.id == cat.categoryId).name
      })),
      onChange: e => {
        setData(data => ({
          ...data,
          categories: e.map(cat => ({ categoryId: cat.value, name: cat.label }))
        }));
      }
    }
  ];

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(e);
    console.log(data);
    const res = await fetch(`/api/products/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, id })
    });
    const json = await res.json();
    console.log(json);
    if (json.error) {
      alert(json.error);
    } else {
      router.push('/');
    }
  };

  const handleDelete = async () => {
    const res = await fetch(`/api/products/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
    const json = await res.json();
    console.log(json);
    if (json.error) {
      alert(json.error);
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <div style={{}}>
        <Form
          inputs={inputs}
          handleSubmit={handleSubmit}
          title="Editar información del producto"
          selects={selects}
        />
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          sx={{ width: '60%', m: 'auto', mt: 2, display: 'block' }}>
          DELETE
        </Button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const baseURL = process.env.BASE_HOSTNAME;
  const { id } = context.query;
  const productsRes = await fetch(baseURL + `/api/products/${id}`);
  const categoriesRes = await fetch(baseURL + `/api/category`);
  const productsData = await productsRes.json();
  const categories = await categoriesRes.json();
  return {
    props: {
      productsData,
      categories: categories
    }
  };
}

export default withPageAuthRequired(Edit);
