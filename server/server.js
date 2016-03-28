// SERVER APP server.js

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.set('port', (process.env.PORT || 8000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// DB CALLS & SET UP

// CONNECTS DB
mongoose.connect('mongodb://localhost/pet_db');

mongoose.model('Pet', new Schema({'name' : String, 'type' : String, 'age' : Number, 'image' : String}));
var Pet = mongoose.model('Pet');

// GET
app.get('/pets', function(req, res){
  Pet.find({}).exec(function(err, data){
        if(err){
          console.log(err);
        }
        res.send(data);
    });
  });


// POST
app.post('/pets', function(req, res){
  var pet = new Pet({name: req.body.name, type: req.body.type, age: req.body.age, image: req.body.image});
  console.log('Here is the post to DB: ', req.body);
  pet.save(function(err){
    if(err) console.log('Error: ', err);
    res.send(pet.toJSON());
  });
});

app.get('/*', function(req,res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
