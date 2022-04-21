import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
// import { Input, FormControl, TextField } from '@mui/material';

import { useEffect, useState } from 'react';
import Form from '../../components/Form';
function Edit({ databaseData }) {
  const router = useRouter();
  const [data, setData] = useState(databaseData);
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
    }
  ];

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(e);
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

  // useEffect(() => {
  //   fetch(`/api/products/${id}`)
  //     .then(res => res.json())
  //     .then(json => setData(json));
  // }, [router]);
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form inputs={inputs} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const baseURL = 'http://localhost:3000';
  const { id } = context.query;
  const res = await fetch(baseURL + `/api/products/${id}`);
  const databaseData = await res.json();
  console.log(databaseData);
  return { props: { databaseData } };
}

export default withPageAuthRequired(Edit);
