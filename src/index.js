var fs = require('fs');

module.exports = function (path, permissions, callback) {
  'use strict';

  fs.stat(path, function (err) {
    if (err) {
      if (err.code.toLowerCase() === 'enoent') {
        fs.mkdir(path, permissions, function (e) {
          callback(e, path);
        });
      }
      else {
        callback(err);
        return false;
      }
    }
    else {
      callback(err, path);
    }
  });
};
