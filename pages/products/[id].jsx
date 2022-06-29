import { Card, CardMedia, Button } from '@mui/material';
import ProductCard from '../../components/ProductCard';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Product({ data }) {
  const [shoppingCart, setShoppingCart] = useLocalStorage('shoppingCart', {});
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '100%' }}>
        <img src={data.img} alt={data.name} style={{ width: '100%' }} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
        <h2>{data.name}</h2>
        <h4>$ {data.price}</h4>
        <div>stock: {data.stock}</div>
        <p style={{ color: 'grey', marginTop: 10 }}>{data.details}</p>
        <Button
          style={{ marginTop: 20 }}
          variant="contained"
          onClick={() => setShoppingCart({ ...shoppingCart, [data.id]: data })}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const data = await fetch(
    `${process.env.BASE_HOSTNAME}/api/products/${id}`
  ).then(res => res.json());
  return { props: { data } };
}
