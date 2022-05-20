import { useEffect, useState } from 'react';
import Link from 'next/link';

import Select from 'react-select';
import ListCard from '../../components/ListCards';

export default function List() {
  const [products, setProducts] = useState([]); // name, img, price, details, stock
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    const [dataProducts, dataCategories] = await Promise.all([
      fetch('./api/products').then(res => res.json()),
      fetch('./api/category').then(res => res.json())
    ]);
    setProducts(dataProducts);
    setCategories(dataCategories);
  }, []);
  return (
    <>
      <Select
        instanceId={'select'}
        options={[
          { value: 'price:min-to-max', label: 'Precio de menor a mayor' },
          { value: 'price:max-to-min', label: 'Precio de mayor a menor' }
        ]}
        placeholder="Ordenar por..."
        onChange={e => {
          if (e.value == 'price:min-to-max') {
            const sortedProducts = products.sort(
              (p1, p2) => p1.price - p2.price
            );
            console.log(sortedProducts);
            setProducts([...sortedProducts]);
          } else if (e.value == 'price:max-to-min') {
            const sortedProducts = products.sort(
              (p1, p2) => p2.price - p1.price
            );
            console.log(sortedProducts);
            setProducts([...sortedProducts]);
          }
        }}
      />
      <div style={{ display: 'flex' }}>
        <aside style={{ marginRight: 25, marginTop: 15 }}>
          <nav>
            <ul>
              <li>
                <Link href="/list">
                  <a>Todos</a>
                </Link>
              </li>
              {categories.map(cat => (
                <li key={cat.id}>
                  <Link href={`/list/${cat.id}`}>
                    <a>{cat.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <ListCard products={products} />
      </div>
    </>
  );
}
