module.exports = function(source) {
  var options = this.options.emberTemplatesLoader || {};
  var precompile = options.precompile;
  if (!precompile) {
    precompile = require(options.compiler || './ember-template-compiler').precompile;
  }

  this.cacheable && this.cacheable();

  return 'export default Ember.Handlebars.template(' + precompile(source) + ');';
};

module.exports.seperable = true;
