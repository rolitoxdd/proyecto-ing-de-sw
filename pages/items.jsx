import { useEffect, useState } from 'react';
export default function Items() {
  let data;
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const res = await fetch('/api/products');
    data = await res.json();
    setProducts(data);
  }, []);
  return (
    <>
      {products.length &&
        products.map(p => (
          <li>
            {p.name} - {p.price}
          </li>
        ))}
    </>
  );
}
