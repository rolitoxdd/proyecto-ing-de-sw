import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Form from '../../../components/Form';

function Edit({databaseData}){
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
          label: 'caracteristica',
          type: 'text',
          value: data.caracteristica,
          required: true,
          onChange: e=> setData(data => ({...data, caracteristica: e.target.value}))
        }
    ]
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(e);
        const res = await fetch(`/api/category/`, {
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
        const res = await fetch(`/api/category/`, {
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
        </>
      );

}

export async function getServerSideProps(context) {
  const baseURL = 'http://localhost:3000';
  const { id } = context.query;
  const res = await fetch(baseURL + `/api/category/${id}`);
  const databaseData = await res.json();
  console.log(databaseData);
  return { props: { databaseData } };
}