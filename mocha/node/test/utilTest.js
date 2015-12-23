'use strict';

var util = require('../main/util');
var assert = require('assert');

describe('util', function(){
    describe('hello()', function(){
        it('should return hello uryyyyyyy', function(){
            var str = util.hello("uryyyyyyy");
            assert(str === "hello uryyyyyyy");
        });

        it('should return hello Hi', function(){
            var str = util.hello("Hi");
            assert(str === "hello Hi");
        });
    });
});