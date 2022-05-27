//___________________
//Dependencies
//___________________
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const cors = require('cors')
require('dotenv').config()
const Travel = require('./models/travel_schema')

//___________________
//Port
//___________________
const PORT = process.env.PORT
//___________________
//Database
//___________________
const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL , { useNewUrlParser: true }
    );
//___________________
//Middleware
//___________________
app.use(cors())
app.use(express.json())
// Error / success

  
  app.listen(PORT, () => console.log( 'Listening on port:', PORT))
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', DATABASE_URL));
db.on('disconnected', () => console.log('mongo disconnected'));

//___________________
//ROUTES
//___________________
app.get('/travel' , (req, res) => {
    res.json('Hello World!');
  });