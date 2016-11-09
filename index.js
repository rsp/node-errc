'use strict';

function errc(cb) {
  return function (err) {
    if (err) {
      cb(new Error(err));
    } else {
       cb.apply(this, Array.prototype.slice.call(arguments, 1));
    }
  }
}

module.exports = errc;
