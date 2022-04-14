import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export const InsertCatalogDialog = props => {
  const open = props.open;
  const handleClose = props.handleClose;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{'¿Desea insertar un nuevo valor?'}</DialogTitle>
      <DialogContent>
        <DialogContentText>Entonces no wei po hermanito</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
export const DeleteCatalogDialog = props => {
  const open = props.open;
  const handleClose = props.handleClose;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{'¿Desea eliminar un nuevo valor?'}</DialogTitle>
      <DialogContent>
        <DialogContentText>Entonces no wei po hermanito</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
export const EditCatalogDialog = props => {
  const open = props.open;
  const handleClose = props.handleClose;
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{'¿Desea editar un nuevo valor?'}</DialogTitle>
      <DialogContent>
        <DialogContentText>Entonces no wei po hermanito</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
