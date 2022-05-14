const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const transactionsRoute = require('./Routes/transactions')

connectDB();

dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/v1/transactions', transactionsRoute);
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on ${PORT}`))
