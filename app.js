const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');

const router = express.Router();

mongoose.connect(config.database);
let db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});

// Init App
const app = express();

// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});

// Permissions Model
let Permissions = require('./models/permissions');
let Roles = require('./models/roles');

app.get('/', function (req, res) {
  res.send('h')
})

// app.post('/', function (req, res) {
//   res.send('Add a book')
// })

// Add Submit POST Route
app.post('/permissions', function(req, res){
    let permissions = new Permissions();
    permissions.resource_name = req.body.resource_name;
    permissions.module_name = req.body.module_name;
    permissions.permission_name = req.body.permission_name;

    permissions.save();
  }
);