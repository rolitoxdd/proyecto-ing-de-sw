import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Form from '../../../components/Form';

// Implementar autenticacion para pagina final

function Edit({ databaseData }) {
  const router = useRouter();
  useEffect(() => {
    if (databaseData.error) router.push('/');
  }, []);

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
      label: 'caracteristica',
      type: 'text',
      value: data.caracteristica,
      required: true,
      onChange: e =>
        setData(data => ({ ...data, caracteristica: e.target.value }))
    }
  ];
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(data);
    const res = await fetch(`/api/category/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, id })
    });
    const json = await res.json();
    if (json.error) {
      alert(json.error);
    } else {
      router.push('/');
    }
  };
  const handleDelete = async () => {
    const res = await fetch(`/api/category/`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
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
      {databaseData.error ? (
        <span>
          {databaseData.error} <br /> Redireccionando...
        </span>
      ) : (
        <div style={{}}>
          <Form
            inputs={inputs}
            handleSubmit={handleSubmit}
            title="Editar Categoría"
          />
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            sx={{ width: '60%', m: 'auto', mt: 2, display: 'block' }}>
            DELETE
          </Button>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const baseURL = process.env.BASE_HOSTNAME;
  const { id } = context.query;
  const res = await fetch(baseURL + `/api/category/${id}`);
  const databaseData = await res.json();
  return { props: { databaseData } };
}
export default Edit;
