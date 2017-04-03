'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

require('./Modal.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  ariaLabel: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.node,
  closeOnOverlay: _react.PropTypes.bool,
  getApplicationNode: _react.PropTypes.func.isRequired,
  isFullscreen: _react.PropTypes.bool,
  isOpen: _react.PropTypes.bool,
  onRequestClose: _react.PropTypes.func
};

var defaultProps = {
  ariaLabel: null,
  children: null,
  closeOnOverlay: true,
  getApplicationNode: null,
  isFullscreen: false,
  isOpen: false,
  onRequestClose: null
};

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var applicationNode = this.getApplicationNode();
      if (applicationNode) {
        applicationNode.setAttribute('aria-hidden', 'true');
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var applicationNode = this.getApplicationNode();
      if (applicationNode) {
        applicationNode.setAttribute('aria-hidden', 'false');
      }
    }
  }, {
    key: 'getApplicationNode',
    value: function getApplicationNode() {
      return this.props.getApplicationNode();
    }
  }, {
    key: 'clickOverlay',
    value: function clickOverlay(e) {
      e.preventDefault();

      if (this.props.onRequestClose) {
        this.props.onRequestClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          ariaLabel = _props.ariaLabel,
          children = _props.children,
          closeOnOverlay = _props.closeOnOverlay,
          getApplicationNode = _props.getApplicationNode,
          isFullscreen = _props.isFullscreen,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          customProps = _objectWithoutProperties(_props, ['ariaLabel', 'children', 'closeOnOverlay', 'getApplicationNode', 'isFullscreen', 'isOpen', 'onRequestClose']);

      if (!isOpen) {
        return null;
      }

      customProps.className = (0, _classnames2.default)([customProps.className, 'terra-Modal', { 'terra-Modal--fullscreen': isFullscreen }]);

      customProps['aria-label'] = ariaLabel;

      customProps.role = customProps.role || 'dialog';

      return _react2.default.createElement(
        _reactPortal2.default,
        { closeOnEsc: true, closeOnOutsideClick: true },
        _react2.default.createElement(
          'div',
          customProps,
          children
        ),
        _react2.default.createElement('div', { className: 'terra-Modal-overlay', onClick: function onClick(e) {
            return _this2.clickOverlay(e);
          } })
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

exports.default = Modal;