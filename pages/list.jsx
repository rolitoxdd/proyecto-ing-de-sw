import { useEffect, useState } from 'react';
// import { ListGroupItem, ListGroup, CardGroup } from 'reactstrap';
// import ProductCard from '../components/ProductCard';
// import {
//   Card,
//   CardImg,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button,
//   Row,
//   Col,
//   CardColumns
// } from 'reactstrap';
import Select from 'react-select';
import ListCard from '../components/ListCards';

export default function List() {
  const [products, setProducts] = useState([]); // name, img, price, details, stock
  useEffect(async () => {
    const res = await fetch('./api/products');
    const data = await res.json();
    setProducts(data);
  }, []);
  return (
    <>
      {/* <div
        style={{
          width: '95%',
          height: 50,
          background: 'blue',
          marginBottom: 20
        }}> */}
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
      <ListCard products={products} />
    </>
  );
}
