import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import transactionsService from '../services/transactionServices'
import {Table} from 'react-bootstrap';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    const getData = () => {
        transactionsService.getTransactions().then(res => {
            setTransactions([...res.data]);
        })
    }
    useEffect(() => {
        getData();
    }, []);

    console.log(transactions);


    return (
        
        <div>
            <h2 className='text-center my-3'>Transactions</h2>
            {transactions.length > 0 ? (
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>ID</th>
      <th>Transaction</th>
      <th>Amount</th>
      
    </tr>
  </thead>
  <tbody>
    {transactions.map((transaction, index)=>(
        <tr key={index}>
            <td>{transaction._id}</td>
            <td>{transaction.text}</td>
            <td>{transaction.amount}</td>
        </tr>
    ))}
    
  </tbody>
</Table>) : (<h3 className='text-center my-3'>You don't have transactions!</h3>)}
        </div>
        
    )
}

export default Transactions