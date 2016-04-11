
'use strict';
const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest-as-promised');
const menuAPIServer = require('../bin/www');

chai.should();
chai.use(require('chai-things'));

before(function() {
    menuAPIServer.start(3000);
});

after(function() {
    menuAPIServer.stop();
});

describe('Feature: get menu from API', function() {
    var request = supertest('http://localhost:3000');

    context('When the GET menu endpoint is invoked', function() {
        it('Invoque menu options API', function(done) {
            return request.get('/menu')
                .expect(200)
                .then(function(res) {
                    console.log('res', res.body);
                    var menuOptions = res.body;
                    expect(menuOptions).to.not.be.undefined;
                    done();
                });
        });
    });
});