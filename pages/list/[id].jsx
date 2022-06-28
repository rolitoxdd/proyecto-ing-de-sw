import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Select from 'react-select';
import ListCard from '../../components/ListCards';

export default function List({ products, categories }) {
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

export async function getServerSideProps(context) {
  const id = context.query.id;
  const [products, categories] = await Promise.all([
    fetch(`${process.env.BASE_HOSTNAME}/api/products/category/${id}`).then(
      res => res.json()
    ),
    fetch(`${process.env.BASE_HOSTNAME}/api/category`).then(res => res.json())
  ]);
  console.log(categories);
  return {
    props: { products: products.products, categories }
  };
}
