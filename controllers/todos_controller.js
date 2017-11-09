const Todo = require('../models/todo');

module.exports = {
    greeting(req, res) {
        res.send({ hi: 'there' });
    },
    Hello(req, res) {
        res.send({ hello: 'HelloWorld'});
    },
    create(req, res) {
        //console.log(req.body);
        const TodoProps = req.body;
        Todo.create(TodoProps)
            .then(todo => {
                res.send(todo);
            });
    },
    show(req,res) {
        Todo.find({})
            .then(todos => {
                res.send(todos);
            });
    }
};