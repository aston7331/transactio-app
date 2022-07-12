import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {makeStyles} from '@material-ui/core/styles';
// import CloseSharpIcon from '@mui/icons-material/CloseSharp';



const useStyles = makeStyles({
  addCardProp: {
    backgroundColor: "red",
    maxWidth: "35%",
    border: "1px solid black",
    marginLeft: "30%",
    marginTop: "5%",
  },
  addCardActions: {
    paddingLeft: "65%",
    paddingBottom: "5%",
  },
  addBox: {
    display: "flex",
    paddingBottom: "5%",
  }
 });


const TransactionPage = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card sx={{ minWidth: 275 }} className={classes.addCardProp}>
      <CardContent>
        <Typography sx={{ fontSize: 22, paddingBottom: 5, }} color="text.secondary" gutterBottom>
          New Transaction
          {/* <Button variant="contained" startIcon={<CloseSharpIcon sx={{ fontSize: 22, paddingLeft: 2, }} />}  sx={{ backgroundColor: 'white', color: 'black', borderRadius: '30px', marginLeft: '60%', alignContent: 'center' }}>
          </Button> */}
        </Typography>
        <Box className={classes.addBox}>
        <Typography sx={{ fontSize: 18, paddingRight: 5, }} variant="h5" component="div" color="text.secondary">
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
        </Box>
        <Box sx={{ width: '60ch'}} className={classes.addBox}> 
            <InputLabel id="demo-simple-select-label" sx={{ width: '20ch'}}>Amount</InputLabel>
            <TextField type={"number"} id="standard-basic" label="" placeholder='0' variant="standard" />
        </Box>
        <Box sx={{ width: '60ch'}} className={classes.addBox}>
            <InputLabel id="demo-simple-select-label" sx={{ width: '20ch'}}>Description</InputLabel>
            <TextField type={"text"} id="standard-basic" label="" variant="standard" />
        </Box>
      </CardContent>
      <CardActions >
        <Stack direction="row" spacing={2} className={classes.addCardActions}>
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