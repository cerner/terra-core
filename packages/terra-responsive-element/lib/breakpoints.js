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

  try {
    breakpoints = JSON.parse(data);
  } catch (e) {
    /* eslint-disable no-console */
    console.error(e);
    console.error('JSON.parse(data) failed. data = ' + data);
    console.info('If you have custom breakpoints, the values may be incorrect on this device');
    /* eslint-enable no-console */

    // Temporary fix for the motorola MC40.
    // See issue: https://github.com/cerner/terra-core/issues/304
    breakpoints = { tiny: 544, small: 768, medium: 992, large: 1216, huge: 1440 };
  }

  document.body.removeChild(datasource);

  return breakpoints;
};

exports.default = getBreakpoints;