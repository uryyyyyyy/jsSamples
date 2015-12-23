goog.provide('uryyyyyyy.Hello');

goog.require('goog.string.format');

/**
 * @constructor
 * @param {string} name
 */
uryyyyyyy.Hello = function (name) {
  /** @type {string} */
  this.name_ = name;
};

uryyyyyyy.Hello.prototype.greet = function() {
  console.log(goog.string.format('Hello, %s', this.name_));
};