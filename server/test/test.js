var assert = require('assert');
const express = require('express');
const app = express();
const helpers = require('../includes/helpers.js');

describe("Always true test", function() {
  it("Should always equal true", function(){
    assert.equal(1, 1);
  });
});

describe("Test User Auth", function() {
  it("Username: Codie & Password: Super, should equal true", function(){
    assert.equal(helpers.auth("Codie", "Super").result, true);
  });
});

describe("Test User Auth -- missing password", function() {
  it("Username: Codie & Password: NULL, should equal false", function(){
    assert.equal(helpers.auth("Codie", null).result, false);
  });
});

describe("Test User Auth -- missing password", function() {
  it("Username: Codie & Password: NULL, should equal false", function(){
    assert.equal(helpers.auth("Codie", null).result, false);
  });
});
