// Generated by CoffeeScript 1.3.3

/*
  Web Service for lipsum.org

  author: Travis Kaufman
*/


(function() {
  var http, lipsumService, url,
    _this = this;

  http = require('http');

  url = require('url');

  lipsumService = {
    get: function(format, callback, queryOpts) {
      var endpoint, response, urlopts;
      urlopts = {
        protocol: 'http:',
        hostname: 'lipsum.lipsum.com',
        pathname: "/feed/" + format
      };
      if (queryOpts != null) {
        urlopts.query = queryOpts;
      }
      endpoint = url.format(urlopts);
      response = null;
      http.get(endpoint, function(res) {
        return response = res;
      }).on('error', function(err) {
        throw new Error(err.message);
      });
      return callback(response);
    }
  };

  module.exports = lipsumService;

}).call(this);
