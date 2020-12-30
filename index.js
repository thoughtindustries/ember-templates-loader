var loaderUtils = require('loader-utils');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var options = loaderUtils.getOptions(this);

  var precompile = options.precompile;
  if (!precompile) {
    precompile = require(options.compiler || './ember-template-compiler').precompile;
  }

  return 'export default Ember.Handlebars.template(' + precompile(source) + ');';
};
