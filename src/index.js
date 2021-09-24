const express = require('express'); //express is working as a web server
const app = express();
const env = require('dotenv');
env.config();

const userRoute = require('./routes/UserRoute');
const adminRoute = require('./routes/admin/adminRoute');
const categoryRoute = require('./routes/category');


//If you are going to read json payload
app.use(express.json());
//We are going to register the new user
//So we need to create an endpoint/api

const db = require('./db');
//localhost:4000/api/signup
app.use('/api',userRoute);
app.use('/api',adminRoute);
app.use('/api',categoryRoute);

//give a port no
app.listen(process.env.PORT,()=>{
    console.log('The server is running on port ',process.env.PORT);
});