//___________________
//Dependencies
//___________________
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const db = mongoose.connection
const cors = require('cors')
const Togo = require('./models/togo')
require('dotenv').config()
const Travel = require('./models/travel_schema')
// const seed = require('./models/seed')


//___________________
//Port
//___________________
// const PORT = process.env.PORT
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
// Travel.create(seed, (err, data)=>{
//     console.log(data)
//   })
//   app.get('/seed', (req,res)=>{
//       Travel.create(seed, (err, data)=>{
     
//       })
//       res.redirect('/')
//     })
app.get('/' , (req, res) => {
    Travel.find({}, (err, foundTravel)=>{
        res.json(foundTravel)
    })
  });

  app.post('/', (req,res)=>{
    Travel.create(req.body, (err, createdTravel)=>{
        res.json(createdTravel)
    })
})


app.delete('/:id', (req, res)=>{
    Travel.findByIdAndRemove(req.params.id, deletedTravel=>{
        res.json(deletedTravel)
    })
})

app.put('/:id', (req,res)=>{
 Travel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTravel)=>{
     res.json(updatedTravel)
 })

})

//____________
app.get('/placestogo' , (req, res) => {
    Togo.find({}, (err, foundTogo)=>{
        res.json(foundTogo)
    })
  });

  app.post('/placestogo', (req,res)=>{
    Togo.create(req.body, (err, createdTogo)=>{
        res.json(createdTogo)
    })
})


app.delete('/placestogo/:id', (req, res)=>{
    Togo.findByIdAndRemove(req.params.id, deletedTogo=>{
        res.json(deletedTogo)
    })
})

app.put('/placestogo/:id', (req,res)=>{
    Togo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTogo)=>{
     res.json(updatedTogo)
 })

})