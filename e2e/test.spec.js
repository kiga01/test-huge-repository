var chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

escribe('Home page', function() {
    before(function () {
        casper.start('http://localhost:3000');
    });
}