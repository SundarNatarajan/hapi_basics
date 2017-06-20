'use strict';

// requires for testing
const Code = require('code');
const expect = Code.expect;
const Lab = require('lab');
const lab = exports.lab = Lab.script();

// use some BDD verbage instead of lab default
const describe = lab.describe;
const it = lab.it;
const after = lab.after;

// require hapi server
const Server = require('../../server');

// tests
describe('functional tests - products', () => {

    it('should get products', (done) => {

        // make API call to self to test functionality end-to-end
        Server.inject({
            method: 'GET',
            url: '/2'
        }, (response) => {
            expect(response.statusCode).to.equal(200);
            expect(response).equals(`Hello ${2}!`)
            done();
        });
    });

    it('should get single product', (done) => {

        Server.inject({
            method: 'GET',
            url: '/'
        }, (response) => {
            expect(response.statusCode).to.equal(200);
            expect(response).equals(`Hello World!`)
            done();
        });
    });

    after((done) => {

        // placeholder to do something post tests
        done();
    });
});

describe('functional tests - get documentation', () => {

    it('should return documentation html', (done) => {

        // make API call to self to test functionality end-to-end
        Server.inject({
            method: 'GET',
            url: '/'
        }, (response) => {

            expect(response.statusCode).to.equal(200);
            expect(response.result).to.be.a.string();
            done();
        });
    });

    after((done) => {

        // placeholder to do something post tests
        done();
    });
})
