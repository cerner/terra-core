'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PopupPresenter = require('./PopupPresenter');

var _PopupPresenter2 = _interopRequireDefault(_PopupPresenter);

require('terra-base/lib/baseStyles');

require('./PopupManager.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  children: _propTypes2.default.node,
  zIndex: _propTypes2.default.string
};

var defaultProps = {
  children: [],
  zIndex: '5001'
};

var PopupManager = function (_React$Component) {
  _inherits(PopupManager, _React$Component);

  function PopupManager(props) {
    _classCallCheck(this, PopupManager);

    var _this = _possibleConstructorReturn(this, (PopupManager.__proto__ || Object.getPrototypeOf(PopupManager)).call(this, props));

    _this.state = { isOpen: false };
    _this.handleRequestOpen = _this.handleRequestOpen.bind(_this);
    _this.handleRequestClose = _this.handleRequestClose.bind(_this);
    _this.setManagerNode = _this.setManagerNode.bind(_this);
    _this.getManagerNode = _this.getManagerNode.bind(_this);
    return _this;
  }

  _createClass(PopupManager, [{
    key: 'handleRequestOpen',
    value: function handleRequestOpen(popupData) {
      var stateData = {
        isOpen: true,
        content: popupData.content,
        contentAttachment: popupData.contentAttachment,
        showArrow: popupData.showArrow,
        targetRef: popupData.targetRef
      };
      this.setState(stateData);
    }
  }, {
    key: 'handleRequestClose',
    value: function handleRequestClose(event) {
      this.setState({ isOpen: false });
    }
  }, {
    key: 'setManagerNode',
    value: function setManagerNode(node) {
      this._managerNode = node;
    }
  }, {
    key: 'getManagerNode',
    value: function getManagerNode() {
      return this._managerNode;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          presentPopup = _props.presentPopup,
          children = _props.children,
          zIndex = _props.zIndex;


      var popup = void 0;
      if (this.state.isOpen) {
        popup = _react2.default.createElement(_PopupPresenter2.default, {
          content: this.state.content,
          contentAttachment: this.state.contentAttachment,
          isOpen: this.state.isOpen,
          showArrow: this.state.showArrow,
          targetRef: this.state.targetRef,
          onRequestClose: this.handleRequestClose,
          boundingRef: this.getManagerNode,
          zIndex: zIndex
        });
      }

      // todo: determine pattern for zindex
      return _react2.default.createElement(
        'div',
        { className: 'terra-PopupManager', ref: this.setManagerNode },
        _react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, { presentPopup: _this2.handleRequestOpen });
        }),
        popup
      );
    }
  }]);

  return PopupManager;
}(_react2.default.Component);

PopupManager.propTypes = propTypes;
PopupManager.defaultProps = defaultProps;

exports.default = PopupManager;