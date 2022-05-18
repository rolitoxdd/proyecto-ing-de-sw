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
import Select from 'react-select';

export default function Form({ title, inputs, handleSubmit, selects = [] }) {
  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off">
        <Card sx={{ p: 2, overflow: 'unset' }}>
          <CardHeader title={title} align="center" />
          <Grid container spacing={2}>
            {inputs.map(data => (
              <Grid item xs={4} key={data.label}>
                {data.type !== 'select' && (
                  <TextField
                    required
                    id="outlined-required"
                    label={data.label}
                    inputProps={data}
                    autoFocus
                  />
                )}
              </Grid>
            ))}
            <Grid item xs={3}>
              {selects.map(data => (
                <Select
                  key={data.label}
                  isMulti
                  options={data.options.map(x => ({
                    value: x.id,
                    label: x.name
                  }))}
                  onChange={data.onChange}
                  defaultValue={data.defaultValue}
                />
              ))}
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" type="submit" sx={{ mt: 3, ml: 6 }}>
                Aplicar cambios
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
