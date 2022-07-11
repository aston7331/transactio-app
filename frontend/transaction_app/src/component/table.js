import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import { useState, useEffect } from "react";




const useStyles = makeStyles({
  addTableContainer: {
    backgroundColor: "blue",
    maxWidth: "70%",
    border: "1px solid black",
    marginLeft: "15%",
    marginTop: "5%"
  },
  addButton: {
    fontSize: "15px",
    padding: "10px",
  },

});

const Tables = () => {
  const classes = useStyles();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getAllTransaction() {
      try {
        const transactions = await axios.get("http://localhost:8090/get-transactions")
        setTransactions(transactions.data.data);
        console.log(transactions.data.data, "uygdusffh");
      } catch (error) {
        console.log("Something is wrong");
      }
    }
    getAllTransaction();
  }, [])

  return (
    <TableContainer component={Paper} className={classes.addTableContainer}>
      <Table sx={{ minWidth: 650, fontSize: 22 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Office Transactions</TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell><button className={classes.addButton}><Link style={{textDecoration: 'none', color: 'black'}} to="/TransactionPage">+ Transaction Page</Link></button></TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Credit</TableCell>
            <TableCell align="center">Debit</TableCell>
            <TableCell align="center">Running Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {
            transactions.map((transaction, i) => {
              return (
                <TableRow key={i}>
                  <TableCell component="th" scope="row" align="center">{transaction.date}</TableCell>
                  <TableCell align="center">{transaction.description}</TableCell>
                  <TableCell align="center">{transaction.credit}</TableCell>
                  <TableCell align="center">{transaction.debit}</TableCell>
                  <TableCell align="center">{transaction.running_balance}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Tables;

