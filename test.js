'use strict';

var test = require('tape');
var errc = require('./index');
var fs = require('fs');

function callWithError(cb) {
  cb('ERROR');
}

function callWithData(cb) {
  cb(null, 'DATA');
}

function timeoutWithError(cb) {
  setTimeout(function () {
    cb('ERROR');
  }, 0);
}

function timeoutWithData(cb) {
  setTimeout(function () {
    cb(null, 'DATA');
  }, 0);
}

test('testing failures', function (t) {

  t.plan(5);

  callWithError(errc(function (data) {
    t.ok(data instanceof Error, 'data should be instance of Error');
    t.equal(data.message, 'ERROR', 'data should contain error mesage');
  }));

  timeoutWithError(errc(function (data) {
    t.ok(data instanceof Error, 'timout data should be instance of Error');
    t.equal(data.message, 'ERROR', 'timout data should contain error mesage');
  }));

  fs.readFile('nonexistent-file', errc(function (data) {
    t.ok(data instanceof Error, 'readFile data should be instance of Error');
  }));

});

test('testing success', function (t) {

  t.plan(5);

  callWithData(errc(function (data) {
    t.notOk(data instanceof Error, 'data should not be instance of Error');
    t.equal(data, 'DATA', 'data should contain correct value');
  }));

  timeoutWithData(errc(function (data) {
    t.notOk(data instanceof Error, 'timout data should not be instance of Error');
    t.equal(data, 'DATA', 'timout data should contain correct value');
  }));

  fs.readFile('package.json', errc(function (data) {
    t.notOk(data instanceof Error, 'readFile data should not be instance of Error');
  }));

});
