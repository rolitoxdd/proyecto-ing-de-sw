import { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function Test() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, price, stock })
    });
    setName('');
    setPrice(0);
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
        Inserta stock del producto
        <input type="number" value={stock} onChange={e => setStock(e.target.value)} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
});
