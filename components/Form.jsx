import * as React from 'react';
import {
  Button,
  FormControl,
  TextField,
  Box,
  Grid,
  Paper,
  styled,
  CardHeader,
  Card
} from '@mui/material';

export default function Form({ inputs, handleSubmit }) {
  console.log(inputs);
  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Card sx={{ p: 2 }}>
          <CardHeader title={`Editar valores del producto`} align="center" />
          <Grid container spacing={2}>
            {inputs.map(data => (
              <Grid item xs={4}>
                <TextField
                  required
                  id="outlined-required"
                  label={data.label}
                  inputProps={data}
                  autoFocus
                />
              </Grid>
            ))}
            <Grid items xs={4}>
              <Button variant="contained" type="submit" sx={{ mt: 3, ml: 6 }}>
                Aplicar cambios
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
      {/*}
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ width: '35ch' }} margin="normal">
        {inputs.map(data => (
          <TextField
            sx={{ marginBottom: 2 }}
            key={data.label}
            inputProps={data}
            label={data.label}
            InputLabelProps={{ shrink: true }}
          />
        ))}
        {/* <TextField label="name" sx={{ marginBottom: 2 }} value={name} onChange={e => setName(e.target.value)} />
      <TextField label="price" sx={{ marginBottom: 2 }} type="number" />
      <TextField label="stock" sx={{ marginBottom: 2 }} type="number" /> }
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
    {*/}
    </>
  );
}
