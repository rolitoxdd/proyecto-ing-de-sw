import { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function Test() {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/products', {
      method: 'PUT',
      body: JSON.stringify({ id: index, name, price, stock })
    });
    setIndex(0);
    setName('');
    setPrice(0);
    setStock(0);
  };
  const handleDelete = e => {
    fetch('/api/products', {
      method: 'DELETE',
      body: JSON.stringify({ id: index })
    });
    setIndex(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID del producto a editar
        <input type="number" value={index} onChange={e => setIndex(e.target.value)} />
      </label>
      <br />
      <label>
        Nuevo nombre del producto
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Nuevo precio del producto
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Nuevo stock del producto
        <input type="number" value={stock} onChange={e => setStock(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </form>
  );
});
