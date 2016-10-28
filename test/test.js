'use strict';

var expect = require('chai').expect,
    lib = require('../lib');

describe('test', function () {
    it('nop', function (done) {
        expect(lib).to.be.an('object');
        done();
    });
});

/* eslint-env mocha */
