const express = require('express')
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 4000;

// adding middleware
app.use(express.json());

// const routerAuth = require('./router/user');

// // mounting
// app.use('/api/v1' , routerAuth);

const dbConnect = require('./config/database');
dbConnect();

app.listen(PORT , ()=>{
    console.log(`App is started at port number ${PORT}`)
});

app.get("/" , (req , res) =>{
    res.send(`<h1> This is home page</h1>`);
})