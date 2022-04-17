import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function ProductCard({ name, price, src }) {
  return (
    <Card key={name}>
      <CardImg alt={name} src={src} top width="100%" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {price}
        </CardSubtitle>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}
