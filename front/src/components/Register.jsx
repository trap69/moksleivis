import React from 'react';
import { useState } from 'react';
import userServices from '../services/userServices';
import {Form, Button} from 'react-bootstrap'

const Register = () => {
        const [username, setUser] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');


        const onSubmit = e =>{
            e.preventDefault();

            const setRegistration = {
                name: username,
                email: email,
                password: password
            }
            userServices.postRegister(setRegistration)

            setUser('');
            setEmail('');
            setPassword('');
        }

  return (
    <div className='mainPage' >
      <h1 className='text-center my-3'>Registration</h1>
        <Form onSubmit={onSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" 
    name='text'
    value={username}
    onChange={(e)=> setUser(e.target.value)} required/>
    </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" 
    name='text'
    value={email}
    onChange={(e)=> setEmail(e.target.value)} required/>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password"  name='text'
    value={password}
    onChange={(e)=> setPassword(e.target.value)} required/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Sign In
  </Button>
</Form>
        {/* <div className="registration">
            <h1>Registration</h1>
            <label>User Name</label>
            <input type="text" 
            value={username}
            onChange={(e)=> setUser(e.target.value)} />
            <label>Email</label>
            <input type="email" 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="text" value={password}
            onChange={(e)=> setPassword(e.target.value)}/>
            <button type='submit'>Register</button>
        </div>
        <div className="logIn">
            <h1>LogIn</h1>
            <input type="text" placeholder='Username...'/>
            <input type="text" placeholder='Password...'/>
            <button type='submit'>LogIn</button>
        </div> */}

    </div>
  )
}

export default Register