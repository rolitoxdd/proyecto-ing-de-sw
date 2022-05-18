import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
// import { Input, FormControl, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Form from '../../components/Form';

function Add() {
  const router = useRouter();
  const [data, setData] = useState({
    name: '',
    caracteristica: ''
  });
  const inputs = [
    {
      label: 'name',
      type: 'text',
      value: data.name,
      required: true,
      onChange: e => setData(data => ({ ...data, name: e.target.value }))
    },
    {
      label: 'caracteristica',
      type: 'text',
      value: data.price,
      required: true,
      onChange: e =>
        setData(data => ({ ...data, caracteristica: e.target.value }))
    }
  ];

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(e);
    const res = await fetch(`/api/category/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data })
    });
    const json = await res.json();
    if (json.error) {
      alert(json.error);
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form
          inputs={inputs}
          handleSubmit={handleSubmit}
          title="Agregar nueva categoría"
        />
      </div>
    </>
  );
}
export default withPageAuthRequired(Add);
