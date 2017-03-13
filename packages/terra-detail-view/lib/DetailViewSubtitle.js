'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * Text to display as a subtitle
   **/
  text: _react.PropTypes.string.isRequired
};

var DetailViewSubtitle = function DetailViewSubtitle(_ref) {
  var text = _ref.text,
      customProps = _objectWithoutProperties(_ref, ['text']);

  var attributes = _extends({}, customProps);
  attributes.className = (0, _classnames2.default)(['terra-DetailView-subtitle', attributes.className]);

  return _react2.default.createElement(
    'div',
    attributes,
    text
  );
};

DetailViewSubtitle.propTypes = propTypes;

exports.default = DetailViewSubtitle;