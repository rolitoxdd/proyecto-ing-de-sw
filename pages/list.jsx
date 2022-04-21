import { useEffect, useState } from 'react';
import { ListGroupItem, ListGroup, CardGroup } from 'reactstrap';
import ProductCard from '../components/ProductCard';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Row, Col, CardColumns } from 'reactstrap';

export default function List() {
  const [products, setProducts] = useState([]); // name, img, price, details, stock
  let htmlDeProductos = [];
  useEffect(async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    setProducts(data);
  }, []);
  for (let prod of products) {
    htmlDeProductos.push(<li style={{ background: 'red', color: 'white' }}>{prod.name}</li>);
  }
  return (
    <>
      <div className="next-steps my-5" data-testid="content">
        {/* <ul>{htmlDeProductos}</ul> */}
        <CardColumns>
          {products.map(({ name, img, price }, index) => (
            <Card key={name}>
              <Row className="no-gutters">
                <Col className="md-2">
                  <CardImg alt={name} src={img} top width="100%" />
                </Col>
                <Col className="md-10">
                  <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {price}
                    </CardSubtitle>
                    <Button>Button</Button>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          ))}
        </CardColumns>
      </div>
    </>
  );
}
