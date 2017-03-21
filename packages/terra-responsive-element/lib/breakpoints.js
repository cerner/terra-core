'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./breakpoints.scss');

var breakpoints = void 0;

/**
 * Translates SASS defined breakpoints into a javascript accessible object
 * @returns {Object} - Returns SASS defined breakpoints in pixels units as key value pairs
 */
var getBreakpoints = function getBreakpoints() {
  if (breakpoints) {
    return breakpoints;
  }

  var data = void 0;
  var datasource = document.createElement('div');
  datasource.className = 'terra-Breakpoints';

  document.body.appendChild(datasource);

  data = window.getComputedStyle(datasource, ':before').getPropertyValue('content');
  data = data.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');

  breakpoints = JSON.parse(data);

  document.body.removeChild(datasource);

  return breakpoints;
};

exports.default = getBreakpoints;