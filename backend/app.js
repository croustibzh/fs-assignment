const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
let ObjectId = require('mongoose').Types.ObjectId;
const Player = require('./Model/player');
const GameM = require('./model/game')

mongoose.connect('mongodb+srv://comp3123:admin@cluster0-3eshe.mongodb.net/playersDB?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection failed');
    });
    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', "*");
      res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-Width, Content-Type, Accept")
      res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE, PUT, OPTIONS");
      next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

// ------------------------------------------------------------    POPULATES THE GAMES COLLECTION  -------------------------------------------------------------------
var db = mongoose.connection;

db.once('open', function() {
  console.log("Connection Successful!");

  // define Schema
  var gameSchema = mongoose.Schema({
    title: String,
    platform:String,
    genre:String,
    rating:String,
    publisher:String,
    release:Date,
    status:String
  });

  // compile schema to model
  var Game = mongoose.model('Game', gameSchema, 'gamelibrary');

  //dummy game list
  var games = [{
    title:'Perfect Dark',
    platform:'Nintendo 64',
    genre:'Action',
    rating:'5 stars',
    publisher:'Nintendo',
    release:'22/05/2000',
    status:'Active'
  },
  {
    title:'Fallout 3',
    platform:'All',
    genre:'Action',
    rating:'5 stars',
    publisher:'Bethesda',
    release:'28/10/2008',
    status:'Active'
  },
  {
    title:'Duke Nukem 3D',
    platform:'PC',
    genre:'Action',
    rating:'4 stars',
    publisher:'3D Realms',
    release:'01/04/1996',
    status:'Active'
  },
  {
    title:'Halo',
    platform:'Xbox',
    genre:'Action',
    rating:'5 stars',
    publisher:'Bungie',
    release:'15/11/2001',
    status:'Active'
  },
  {
    title:'Call of Duty 2',
    platform:'PC',
    genre:'Action',
    rating:'3 stars',
    publisher:'Infinity Ward',
    release:'25/10/2005',
    status:'Active'
  },
  {
    title:'Stalker Shadow of Tchernobyl',
    platform:'PC',
    genre:'Action',
    rating:'4 stars',
    publisher:'GSC Game World',
    release:'20/03/2007',
    status:'Active'
  }];
  GameM.collection.remove({},console.log('DB erased'))


  GameM.collection.insert(games, function (err, docs) {
    if (err){
        return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });
});


app.get('/api/games', (req, res, next) => {
  GameM.find((err,docs)=>{
      if (!err) {
          res.send({games: docs});
      }
  })
});
// -------------------------------------------------------------------  PLAYER COLLECTION API ENDPOINTS ---------------------------------------------------------------------------------------------


app.get('/api/players', (req, res, next) => {
    Player.find((err,docs)=>{
        if (!err) {
            res.send({players: docs});
        }
    })
});

 app.get('/api/players/:id', (req, res, next) => {
     if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');
     else {

         Player.findOne(req.params.id, (err, doc) => {
             if (!err) { res.json(doc); }
             else { console.log("Error fetching player: " + JSON.stringify(err, undefined, 2)) }
         });
     }
 });


app.post('/api/players', (req, res, next) => {
    new Player({
      _id:req.body._id,
        username: req.body.username,
        rank: req.body.rank,
        score: req.body.score,
        time: req.body.time,
        fGame: req.body.fGame,
        status: req.body.status
    }).save((err, playr) => {
        if (err) return console.error(err);
        console.log(playr.username + " saved to players collection.");
    });
});

app.delete('/api/players/:id', (req,res,next) =>{
        Player.deleteOne({_id: req.params.id})
        .then(result => {
            res.status(200).json({message: "Deleted successfully"})
        });
    });

module.exports = app;
