const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
let ObjectId = require('mongoose').Types.ObjectId;
const Player = require('./Model/player');

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
 
         Player.findById(req.params.id, (err, doc) => {
             if (!err) { res.json(doc); }
             else { console.log("Error fetching player: " + JSON.stringify(err, undefined, 2)) }
         });
     }
 });
 

app.post('/api/players', (req, res, next) => {
    const player = new Player({
        username: req.body.username,
        rank: req.body.rank,
        score: req.body.score,
        time: req.body.time,
        fGame: req.body.fGame,
        status: req.body.status
    })

    player.save((err, player) => {
        if (err) return console.error(err);
        console.log(player.username + " saved to players collection.");
    });
});

app.delete('/api/players/:id', (req,res,next) =>{
        Player.deleteOne({_id: req.params.id})
        .then(result => {
            res.status(200).json({message: "Deleted successfully"})
        });
    });
        
module.exports = app;