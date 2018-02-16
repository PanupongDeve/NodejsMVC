const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const TodoRoutes = require('./routes/Todo_routes');
const app = express();

//ติดต่อ Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Todo');

// ตรวจสอบผลการต่อ Database
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

//ติดตั้ง json middleware by bodyParser.json
app.use(bodyParser.json());

//กำหนด route function
TodoRoutes(app);

module.exports = app;