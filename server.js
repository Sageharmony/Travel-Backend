//___________________
//Dependencies
//___________________
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const cors = require('cors')
require('dotenv').config()

//___________________
//Port
//___________________
const PORT = process.env.PORT
//___________________
//Database
//___________________
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI , { useNewUrlParser: true }
    );
//___________________
//Middleware
//___________________
app.use(cors())
app.use(express.json())
// Error / success

app.get('/' , (req, res) => {
    res.send('Hello World!');
  });
  
app.listen(3000, ()=>{
    console.log('listening...')
})
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
