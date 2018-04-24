const assert = require('chai').assert;

const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

//const app = require('../app');

describe('App', function() {
    it('app should return hello', function() {
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return type string', function() {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers shoud adds two numbers', function() {
        let result = addNumbers(5, 4);
        assert.equal(result, 9);
    })

    it('addNumbers shoud be abowe 5', function() {
        let result = addNumbers(5, 5);
        assert.isAbove(result, 5);
    })
})