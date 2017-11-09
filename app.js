const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const TodoRoutes = require('./routes/Todo_routes');
const app = express();

//ติดต่อ Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Todo');

//ติดตั้ง json middleware by bodyParser.json
app.use(bodyParser.json());

//กำหนด route function
TodoRoutes(app);

module.exports = app;