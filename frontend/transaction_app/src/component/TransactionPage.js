import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';




const TransactionPage = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          New Transaction
        </Typography>
        <Typography variant="h5" component="div" color="text.secondary">
        Transaction Type
        </Typography>
        <Box sx={{ width: '60ch'}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ width: '20ch'}}>Transaction</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Credit</MenuItem>
              <MenuItem value={20}>Debit</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: '60ch'}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ width: '20ch'}}>Amount</InputLabel>
            <TextField type={"number"} id="standard-basic" label="" placeholder='0' variant="standard" />
          </FormControl>
        </Box>
        <Box sx={{ width: '60ch'}}>
          <FormControl fullWidth variant="body2">
            <InputLabel id="demo-simple-select-label" sx={{ width: '20ch'}}>Description</InputLabel>
            <TextField type={"text"} id="standard-basic" label="" variant="standard" />
          </FormControl>
        </Box>
      </CardContent>
      <CardActions>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" startIcon={<SaveIcon />}>
            SAVE
          </Button>
          <Button variant="contained" startIcon={<HighlightOffSharpIcon />}>
              CANCEL
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}

export default TransactionPage;