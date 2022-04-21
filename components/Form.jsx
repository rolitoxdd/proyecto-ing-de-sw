import { Button, FormControl, TextField } from '@mui/material';

export default function Form({ inputs, handleSubmit }) {
  return (
    <FormControl sx={{ width: '35ch' }} margin="normal" onSubmit={handleSubmit}>
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
      <TextField label="stock" sx={{ marginBottom: 2 }} type="number" /> */}
      <Button variant="outlined">Submit</Button>
    </FormControl>
  );
}
