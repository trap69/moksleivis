require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./config/db');
connectDB();

const User = require('./models/User');


const app = express();
app.use(express.json());





const registerUser = require('./controllers/userController');
const setTransactions = require('./controllers/setTransactions');
const loginUser = require('./controllers/loginController');
const getTransactions = require('./controllers/getTransactions');


app.post('/api/user', registerUser);
app.post('/api/user/login', loginUser);
app.get('/api/transactions', getTransactions)
app.post('/api/transactions', setTransactions)



app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})