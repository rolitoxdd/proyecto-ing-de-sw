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
import { Button } from '@mui/material';
import { useUser } from '@auth0/nextjs-auth0';

const ListCard = ({ products }) => {
  const { user } = useUser();
  return (
    <Grid container spacing={2}>
      {products.map(({ name, img, price, details, id }, index) => (
        <Grid item xs={4}>
          <Card
            sx={{ maxWidth: 300, pt: 2, minHeight: 500, display: 'flex' }}
            key={id}>
            <CardActionArea>
              <CardMedia component="img" height="240" image={img} alt={name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
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
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default ListCard;
