import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container
} from '@mui/material';
import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0';

const ProductCard = ({ id, img, name, details, price, user, enabled }) => (
  <Grid item xs={4} key={id}>
    <Card
      sx={{ maxWidth: 300, pt: 2, minHeight: 500, display: 'flex' }}
      key={id}>
      <CardActionArea>
        <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
          <CardMedia
            component="img"
            // height="240"
            image={img}
            alt={name}
            style={{ position: 'absolute' }}
          />
          {user && (
            <p style={{ position: 'absolute' }}>
              {enabled ? 'enabled' : 'disabled'}
            </p>
          )}
        </div>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              lineHeight: 1.48
            }}>
            <Link href={`/products/${id}`}>{name}</Link>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <Typography variant="h6" color="purple" align="left">
            ${price}
          </Typography>
          {user && (
            <Button
              size="small"
              align="right"
              variant="contained"
              href={`edit/${id}`}
              sx={{}}>
              Edit
            </Button>
          )}
          {/* {user && (
            <>
              <br />
              <hr />
              <span>{enabled ? 'enabled' : 'disabled'}</span>
            </>
          )} */}
        </CardActions>
      </CardActionArea>
    </Card>
  </Grid>
);

const ListCard = ({ products }) => {
  const { user } = useUser();
  return (
    <Grid container spacing={2}>
      {user
        ? products.map(({ name, img, price, details, id, enabled }, index) => (
            <ProductCard
              key={id}
              id={id}
              name={name}
              img={img}
              price={price}
              details={details}
              user={user}
              enabled={enabled}
            />
          ))
        : products
            .filter(product => product.enabled)
            .map(({ name, img, price, details, id, enabled }, index) => (
              <ProductCard
                key={id}
                id={id}
                name={name}
                img={img}
                price={price}
                details={details}
              />
            ))}
    </Grid>
  );
};
export default ListCard;
