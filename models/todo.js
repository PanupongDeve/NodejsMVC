const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        default: 'Empty Body'
    }
});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
