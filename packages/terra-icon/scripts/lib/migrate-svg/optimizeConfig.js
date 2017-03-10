'use strict';

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var svgoConfig = function svgoConfig(csvObject) {

  var classes = (0, _classnames2.default)({ 'is-static': !csvObject.isThemeable }, { 'is-themeable': csvObject.isThemeable }, { 'is-spin': csvObject.isSpin }, { 'is-bidi': csvObject.isBidi });
  console.log(classes);
  return {
    plugins: [{
      mergePaths: false
    }, {
      removeTitle: true
    }, {
      addClassesToSVGElement: {
        className: classes
      }
    }]
  };
};

module.exports = svgoConfig;