import React from 'react';
import { Row, Col, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductCard from './ProductCard';

// import contentData from '../utils/contentData';

const Content = ({ contentData }) => (
  <div className="next-steps my-5" data-testid="content">
    <h2 className="my-5 text-center" data-testid="content-title">
      Nuestros productos
    </h2>
    {/* <Row className="d-flex justify-content-between" data-testid="content-items"> */}
    <CardGroup>
      {contentData.map(({ name, price, src }, i) => (
        <ProductCard key={name} name={name} price={price} src={src} />
        // <Card key={name}>
        //   <CardImg alt={name} src={src} top width="100%" />
        //   <CardBody>
        //     <CardTitle tag="h5">{name}</CardTitle>
        //     <CardSubtitle className="mb-2 text-muted" tag="h6">
        //       {price}
        //     </CardSubtitle>
        //     <Button>Button</Button>
        //   </CardBody>
        // </Card>
      ))}
    </CardGroup>
    {/* </Row> */}
  </div>
);

export default Content;
