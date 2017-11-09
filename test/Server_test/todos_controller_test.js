const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../app');
const Todo = mongoose.model('todo');


describe('Todo controller', () => {
    it('Post to /api/Todo creates a new Todo', (done) => {
        Todo.count().then( count => {
            request(app)
            .post('/api/todos')
            .expect('Content-type', /json/)
            .expect(200)
            .send({ title: 'Fucking JS' }) //test middleware bodyParser ในการรับข้อมูล
            .end((err, response) => {
                
                Todo.count().then(newCount => {
                    //console.log(response);
                    assert(count + 1 === newCount);
                    done(); 
                });   
            });
        })
       
    });
});