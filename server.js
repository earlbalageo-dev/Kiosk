const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');




//Load env variables
dotenv.config({path: './config/config.env'});

//Connect to DataBase
connectDB();

//Route Files
const food = require('./routes/food');
const drink = require('./routes/drink');

const app = express();
//Body Parser
app.use(express.json());


//Mount Routers
app.use('/api/food', food);
app.use('/api/drink', drink);

//connect to server
const PORT = process.env.PORT;


const server = app.listen(PORT,console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));