const TodosController = require('../controllers/todos_controller');


module.exports = (app) => {
    //Watch for incomming requests of mthod GET
    // to the route http://localhost:3050/api
    app.get('/api', TodosController.greeting);
    app.get('/hello', TodosController.Hello);

    app.post('/api/todos', TodosController.create);
    app.get('/api/todos', TodosController.show);
};