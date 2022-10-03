import React from 'react';
import { useState } from 'react';
import transactionsService from '../services/transactionServices';
import { Form, Button } from 'react-bootstrap';

const SetTransaction = ({getData}) => {
    const [text,setText] = useState('');
    const [amount, setAmount] = useState('');

    const onSubmit = e =>{
        e.preventDefault();

        const setTransaction = {
            text: text,
            amount: amount,
            user: '62c6f9410bb409a1bc9db528'
        }
        transactionsService.postTransactions(setTransaction);

        setText('');
        setAmount('');
        getData();
    }
    
  return (
    <div>
        <Form onSubmit={onSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Text</Form.Label>
    <Form.Control type="text" placeholder="Enter Transaction Name" 
    name='text'
    value={text}
    onChange={(e)=> setText(e.target.value)} />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Amount</Form.Label>
    <Form.Control type="number" placeholder="Enter Amount"  name='number'
    value={amount}
    onChange={(e)=> setAmount(e.target.value)}/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Save
  </Button>
</Form>
    </div>
  )
}

export default SetTransaction