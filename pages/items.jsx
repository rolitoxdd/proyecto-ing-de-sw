import { useEffect, useState } from 'react';
export default function Items() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  }, []);
  return (
    <>
      {data.length &&
        data.map(p => (
          <li>
            {p.name} - {p.price}
          </li>
        ))}
    </>
  );
}
