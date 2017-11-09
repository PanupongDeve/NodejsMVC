const assert = require('assert');
const request = require('supertest'); // package ในการtest request ของ express
const app = require('../../app');

describe('The express app', () => {
    it('handles a GET request to /api', (done) => {
        request(app)
            .get('/api') //ตรวจสอบว่ามี /api หรือไม่
            .expect('Content-type', /json/)
            .expect(200)
            .end((err, response) => { //ส่งข้อมูลที่ตรวจสอบให้ response
                //console.log(response);
                assert(response.body.hi === 'there');
                if (err) throw err;
                done();    
            });
    });
});