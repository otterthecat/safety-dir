'use strict';
var fs = require('fs');
var nodePath = require('path');

module.exports = function(path, permissions, callback){
  fs.stat(path, function(err, stats){
    if(err){
      if(err.code.toLowerCase() === 'enoent') {
        fs.mkdir(path, permissions, function(err){
          callback(err, path);
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