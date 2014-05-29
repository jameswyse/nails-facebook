var fb = require('fbgraph');

exports = module.exports = {};

exports.name = 'facebook';
exports.type = 'service';

exports.register = function(app, options, next) {

  if(options.access_token) {
    fb.setAccessToken(options.access_token);
  }

  if(options.request) {
    fb.setOptions(options.request);
  }

  app.service.register('facebook', fb);

  return next();
};
