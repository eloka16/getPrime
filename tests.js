'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/getPrime.js');

describe("Test that returns prime numbers in an array from 0 to the number", function() {
  it("should return [2, 3, 5, 7] for 10", function() {
    assert(lib.getPrime(10) == [2, 3, 5, 7]);
  });
  it("should return [2] for 2", function() {
    assert(lib.getPrime(2) == [2]);
  });
  it("should return [2, 3, 5] for 5", function() {
    assert(lib.getPrime(5) == [2, 3, 5]);
  });
  it("should return [ 2, 3, 5, 7, 11, 13, 17 ] for 17", function() {
    assert(lib.getPrime(17) == [ 2, 3, 5, 7, 11, 13, 17 ]);
  });
  it("should return [ 2, 3, 5, 7, 11, 13] for 13", function() {
    assert(lib.getPrime(13) == [ 2, 3, 5, 7, 11, 13]);
  });
  it("should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] for 20", function() {
    assert(lib.getPrime(20) == [ 2, 3, 5, 7, 11, 13, 17, 19]);
  });
});

describe("Test returns undefined for a non-number or numbers less than 2", function() {
  it("should return undefined for 1",  function() {
    assert(lib.getPrime(1) == undefined);
  });
  it("should return undefined for -12",  function() {
    assert(lib.getPrime(-12) == undefined);
  });
  it("should return undefined for string",  function() {
    assert(lib.getPrime('boy') == undefined);
  });
  it("should return undefined for [2, 3, 4]",  function() {
    assert(lib.getPrime([2, 3, 4]) == undefined);
  });
  it("should return undefined for string",  function() {
    assert(lib.getPrime('This is Andela') == undefined);
  });
});