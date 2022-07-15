import React, { useState } from 'react';
import './App.css'
import axios from "axios";
import { useHistory } from "react-router-dom";



function TransactionPage() {
  const [transactionType, setTransactionType] = useState('');
  const [amount, setamount] = useState('');
  const [description, setdescription] = useState('');
  let history = useHistory();


  const handlesetTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  }
  const handleAmountChange = (e) => {
    setamount(e.target.value);
  }
  const handleDescriptionChange = (e) => {
    setdescription(e.target.value);
  }

  const clearForm = () => {
    setdescription('');
    setamount('');
    setTransactionType('');
  }
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    let transactions = {
      "type": transactionType,
      "amount": amount,
      "description": description
    }
    axios
      .post('http://localhost:8090/running-transaction', transactions)
      .then((response) => {
        history.goBack("/");
      },
      (error) =>{
          console.log(error);
          alert(`         Insuficient Balance 
          Please enter correct amount`)
      });

    console.log(transactions);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(e) => { handleSubmit(e) }} className="Form-style">
          <p className="Form-p"> New Transaction </p>
          <div className="Form-body">
            <label className="Form-lable">
              Transaction Type:
            </label>
            <select value={transactionType} required onChange={(e) => { handlesetTransactionTypeChange(e) }} className="Form-input">
              <option value="" > Select</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
          <div className="Form-body">
            <label className="Form-lable">
              Amount:
            </label>
            <input type="number" value={amount} required onChange={(e) => { handleAmountChange(e) }} className="Form-input" />
          </div>
          <div className="Form-body">
            <label className="Form-lable">
              Description:
            </label>
            <input type="textarea" value={description} required onChange={(e) => { handleDescriptionChange(e) }} className="Form-input" />
          </div>
          <div className="Form-buttonInput">
            <button type="submit" value="SAVE"  className="Form-button"><svg viewBox="0 0 32 32" height={15}><path d="M9,7V2H19V7a1,1,0,0,1-1,1H10A1,1,0,0,1,9,7ZM8,30H24V26.56H8Zm0-5.44H24v-2H8ZM29,8.7,24.37,3.09A3,3,0,0,0,22.06,2H21V7a3,3,0,0,1-3,3H10A3,3,0,0,1,7,7V2H5A3,3,0,0,0,2,5V27a3,3,0,0,0,3,3H6V20a3,3,0,0,1,3-3H23a3,3,0,0,1,3,3V30h1a3,3,0,0,0,3-3V10.92A3,3,0,0,0,29,8.7ZM23,19H9a1,1,0,0,0-1,1v.56H24V20A1,1,0,0,0,23,19Z" fill="#FFF"/></svg> SAVE</button>
            <button type="reset" value="CANCEL" onClick={clearForm} className="Form-button"><svg viewBox="0 0 329.26933 329" height={15}><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" fill="#FFF"/></svg> CANCEL</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default TransactionPage;
