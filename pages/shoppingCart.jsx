import { Button, Alert } from '@mui/material';
import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function ShoppingCart() {
  const [shoppingCart, setShoppingCart] = useLocalStorage('shoppingCart', {});
  const [successfullPurchase, setSuccessfullPurchase] = useState(false);
  const handleDelete = id => () => {
    const shoppingCartCopy = { ...shoppingCart };
    delete shoppingCartCopy[id];
    setShoppingCart(shoppingCartCopy);
  };
  return (
    <div>
      {Object.keys(shoppingCart).map(prod => (
        <div
          key={prod}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <div style={{ padding: '0 auto', width: '10%' }}>
            <img
              src={shoppingCart[prod].img}
              alt={shoppingCart[prod].name}
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <h6>
              {shoppingCart[prod].name}
              <Button
                variant="outlined"
                color="error"
                style={{ marginLeft: 10 }}
                onClick={handleDelete(shoppingCart[prod].id)}>
                delete
              </Button>
            </h6>
          </div>
        </div>
      ))}
      {Object.keys(shoppingCart).length > 0 && (
        <Button
          variant="contained"
          style={{ width: '100%', marginTop: 20, marginBottom: 20 }}
          onClick={() => {
            fetch(`/api/shoppingCart`, {
              method: 'POST',
              body: JSON.stringify(
                Object.values(shoppingCart).map(prod => ({
                  id: prod.id,
                  name: prod.name,
                  price: prod.price
                }))
              )
            })
              .then(res => res.json())
              .then(data => {
                if (data.error) {
                  alert('problema con la api, intentelo más tarde');
                  return;
                }
                setShoppingCart({});
                setSuccessfullPurchase(true);
              });
          }}>
          COMPRAR
        </Button>
      )}
      {successfullPurchase && (
        <Alert severity="success">
          Compra exitosa. <a href="/">Ir al home</a>
        </Alert>
      )}
    </div>
  );
}
