import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Card, CardActions, CardContent, Box, Button, Typography, Grid, gridClasses, Dialog } from '@mui/material';
import { InsertCatalogDialog, DeleteCatalogDialog, EditCatalogDialog } from '../components/CatalogDialog';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);
export default withPageAuthRequired(function CatPage() {
  var [openInsert, setOpenInsert] = useState(false);
  var [openDelete, setOpenDelete] = useState(false);
  var [openEdit, setOpenEdit] = useState(false);

  const handleClickInsert = () => {
    setOpenInsert(true);
  };
  const handleCloseInsert = () => {
    setOpenInsert(false);
  };
  const handleClickDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleClickEdit = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 330 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Agregar datos al catálogo
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ margin: 'auto' }} onClick={handleClickInsert}>
                Click aquí
              </Button>
              <InsertCatalogDialog open={openInsert} handleClose={handleCloseInsert} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 330 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Eliminar datos del catálogo
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ margin: 'auto' }} onClick={handleClickDelete}>
                Click aquí
              </Button>
              <DeleteCatalogDialog open={openDelete} handleClose={handleCloseDelete} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 330 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Editar datos del catálogo
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{ margin: 'auto' }} onClick={handleClickEdit}>
                Click aquí
              </Button>
              <EditCatalogDialog open={openEdit} handleClose={handleCloseEdit} />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
});
