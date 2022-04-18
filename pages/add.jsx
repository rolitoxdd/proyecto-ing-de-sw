import { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function Test() {
  const [name, setName] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [stock, setStock] = useState(undefined);
  const [img, setImg] = useState(undefined);
  const [details, setDetails] = useState(undefined);
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, price, stock, details, img })
    });
    setName('');
    setPrice(0);
    setStock(0);
    setDetails('');
    setImg('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Inserta nombre del producto
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Inserta precio del producto
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Inserta imagen del producto
        <input type="text" value={img} onChange={e => setImg(e.target.value)} />
      </label>
      <br />
      <label>
        Inserta stock del producto
        <input type="number" value={stock} onChange={e => setStock(e.target.value)} />
      </label>
      <br />
      <label>
        Inserta detalles del producto
        <input type="text" value={details} onChange={e => setDetails(e.target.value)} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
});
