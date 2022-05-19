import { useEffect, useState } from 'react';
import { ListGroupItem, ListGroup, CardGroup } from 'reactstrap';
import ProductCard from '../components/ProductCard';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  CardColumns
} from 'reactstrap';
import ListCard from '../components/ListCards';

export default function List() {
  const [products, setProducts] = useState([]); // name, img, price, details, stock
  useEffect(async () => {
    const res = await fetch('./api/products');
    const data = await res.json();
    setProducts(data);
  }, []);
  return <ListCard products={products} />;
}
