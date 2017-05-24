'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./TetherOverlay.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Whether or not the z-index of the overlay should be placed above that of modal.
   */
  displayAboveModal: _propTypes2.default.bool
};

var defaultProps = {
  displayAboveModal: false
};

var TetherOverlay = function (_React$Component) {
  _inherits(TetherOverlay, _React$Component);

  function TetherOverlay() {
    _classCallCheck(this, TetherOverlay);

    return _possibleConstructorReturn(this, (TetherOverlay.__proto__ || Object.getPrototypeOf(TetherOverlay)).apply(this, arguments));
  }

  _createClass(TetherOverlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Disable scrolling on the page when Overlay is displayed
      document.documentElement.style.overflow = 'hidden';
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Enable scrolling on the page since Overlay has gone away
      document.documentElement.style.overflow = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          displayAboveModal = _props.displayAboveModal,
          customProps = _objectWithoutProperties(_props, ['displayAboveModal']);

      var overlayClassNames = (0, _classnames2.default)(['terra-TetherOverlay', { 'terra-TetherOverlay--modal': displayAboveModal }]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: overlayClassNames }),
        _react2.default.createElement('div', { className: 'terra-TetherOverlay-inner' })
      );
    }
  }]);

  return TetherOverlay;
}(_react2.default.Component);

exports.default = TetherOverlay;