'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includePaths = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

require('./compact-tile-display.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Display = function (_React$Component) {
  _inherits(Display, _React$Component);

  function Display() {
    _classCallCheck(this, Display);

    return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
  }

  _createClass(Display, [{
    key: 'render',
    value: function render() {
      if (!this.props) {
        return null;
      }

      var displayAttributes = _extends({}, this.props.attributes);
      displayAttributes.className = (0, _classnames2.default)(['terra-CompactTile-display', displayAttributes.className]);

      var textAttributes = {};
      textAttributes.className = (0, _classnames2.default)(['terra-CompactTile-text', { 'terra-CompactTile-text--isTruncated': this.props.isTruncated }, _defineProperty({}, 'terra-CompactTile-text--' + this.props.textStyle, this.props.textStyle)]);

      return _react2.default.createElement(
        'div',
        displayAttributes,
        Display.renderIcon(this.props.icon),
        _react2.default.createElement(
          'div',
          textAttributes,
          this.props.text
        )
      );
    }
  }], [{
    key: 'renderIcon',
    value: function renderIcon(icon) {
      if (!icon) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'terra-CompactTile-text--inlineIcon' },
        icon
      );
    }
  }]);

  return Display;
}(_react2.default.Component);

var textStyles = ['secondary', 'attention', 'strikeThrough'];

Display.defaultProps = {
  isTruncated: false
};

Display.propTypes = {
  text: _react.PropTypes.string,
  textStyle: _react.PropTypes.oneOf(textStyles),
  isTruncated: _react.PropTypes.bool,
  icon: _react.PropTypes.element,
  attributes: _react.PropTypes.oneOfType([_react.PropTypes.object])
};

var includePaths = exports.includePaths = _path2.default.join(__dirname, '../src/');

exports.default = Display;