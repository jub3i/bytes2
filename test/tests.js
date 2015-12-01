'use strict';

var assert = require('assert')
var bytes2 = require('../index.js')

describe('Test bytes2() conversion', function() {
  // base-10, decimal, SI and metric
  it('Should convert bytes into kB', function() {
    assert.equal(bytes2('kB', 1000), 1);
  });

  it('Should convert bytes into MB', function() {
    assert.equal(bytes2('MB', 2 * 1000000), 2);
  });

  it('Should convert bytes into GB', function() {
    assert.equal(bytes2('GB', 3 * 1000000000), 3);
  });

  it('Should convert bytes into TB', function() {
    assert.equal(bytes2('TB', 1000000000000 / 2), 0.5);
  });

  it('Should convert bytes into PB', function() {
    assert.equal(bytes2('PB', 1000000000000000), 1);
  });

  it('Should convert bytes into EB', function() {
    assert.equal(bytes2('EB', 1000000000000000000), 1);
  });

  // base-2, binary and IEC
  it('Should convert bytes into KiB', function() {
    assert.equal(bytes2('KiB', 1024), 1);
  });

  it('Should convert bytes into MiB', function() {
    assert.equal(bytes2('MiB', 1048576), 1);
  });

  it('Should convert bytes into GiB', function() {
    assert.equal(bytes2('GiB', 1073741824), 1);
  });

  it('Should convert bytes into TiB', function() {
    assert.equal(bytes2('TiB', 1099511627776), 1);
  });

  it('Should convert bytes into PiB', function() {
    assert.equal(bytes2('PiB', 1125899906842624), 1);
  });

  it('Should convert bytes into EiB', function() {
    assert.equal(bytes2('EiB', 1152921504606847000), 1);
  });

  // JEDEC

  it('Should convert bytes into jedecKB', function() {
    assert.equal(bytes2('jedecKB', 1024), 1);
  });

  it('Should convert bytes into jedecMB', function() {
    assert.equal(bytes2('jedecMB', 1048576), 1);
  });

  it('Should convert bytes into jedecGB', function() {
    assert.equal(bytes2('jedecGB', 1073741824), 1);
  });

  // options

  it('Should accept decimal option', function() {
    assert.equal(bytes2('KiB', 1000, { decimals: 2 }), 0.98);
  });

  it('Should accept prepend option', function() {
    assert.equal(bytes2('KiB', 1024, { prepend: true }), '1 KiB');
  });

  it('Should accept seperator option, when prepend is specified', function() {
    assert.equal(bytes2('KiB', 1024, { prepend: true, seperator: '-' }), '1-KiB');
  });

  it('Should ignore seperator option, when prepend is not specified', function() {
    assert.equal(bytes2('KiB', 1024, { seperator: '-' }), 1);
  });
});
