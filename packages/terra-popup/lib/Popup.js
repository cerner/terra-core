'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _PopupFrame = require('./PopupFrame');

var _PopupFrame2 = _interopRequireDefault(_PopupFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var attachmentPositions = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var propTypes = {
  /**
   * The children list items passed to the component.
   */
  attachment: _react.PropTypes.oneOf(attachmentPositions).isRequired,
  content: _react.PropTypes.element,
  enabled: _react.PropTypes.bool,
  offset: _react.PropTypes.string,
  // optimizations: PropTypes.object,
  renderElementTag: _react.PropTypes.string,
  renderElementTo: _react.PropTypes.any,
  style: _react.PropTypes.object,
  target: _react.PropTypes.element.isRequired,
  targetAttachment: _react.PropTypes.oneOf(attachmentPositions),
  targetModifier: _react.PropTypes.string,
  targetOffset: _react.PropTypes.string,
  onClickOutside: _react.PropTypes.func,
  isOpen: _react.PropTypes.bool
};

var defaultProps = {
  renderElementTag: 'div',
  renderElementTo: null,
  onClickOutside: undefined,
  isOpen: false
};

var WrappedPopupFrame = (0, _reactOnclickoutside2.default)(_PopupFrame2.default);

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup(props) {
    _classCallCheck(this, Popup);

    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.state({ open: _this.props.isOpen });
    return _this;
  }

  _createClass(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._targetNode = _reactDom2.default.findDOMNode(this);
      this._update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroy();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.open !== nextProps.isOpen) {
        this.setState({ open: nextProps.isOpen });
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      this._tether.disable();
    }
  }, {
    key: 'enable',
    value: function enable() {
      this._tether.enable();
    }
  }, {
    key: 'position',
    value: function position() {
      this._tether.position();
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      this.setOpen(false);
      this.props.onClickOutside(event);
    }
  }, {
    key: 'setOpen',
    value: function setOpen(open) {
      this.setState({ open: open });
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      if (this._elementParentNode) {
        _reactDom2.default.unmountComponentAtNode(this._elementParentNode);
        this._elementParentNode.parentNode.removeChild(this._elementParentNode);
      }

      if (this._tether) {
        this._tether.destroy();
      }

      this._elementParentNode = null;
      this._tether = null;
    }
  }, {
    key: '_update',
    value: function _update() {
      var _this2 = this;

      var _props = this.props,
          content = _props.content,
          renderElementTag = _props.renderElementTag,
          renderElementTo = _props.renderElementTo;

      // if no element component provided, bail out

      if (!content) {
        // destroy Tether elements if they have been created
        if (this._tether) {
          this._destroy();
        }
        return;
      }

      // create element node container if it hasn't been yet
      if (!this._elementParentNode) {
        // create a node that we can stick our content Component in
        this._elementParentNode = document.createElement(renderElementTag);

        // append node to the end of the body
        var renderTo = renderElementTo || document.body;
        renderTo.appendChild(this._elementParentNode);
      }

      var wrappedContent = _react2.default.createElement(
        WrappedPopupFrame,
        { onClickOutside: this.handleClickOutside },
        'content'
      );

      // render element component into the DOM
      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, wrappedContent, this._elementParentNode, function () {
        // don't update Tether until the subtree has finished rendering
        _this2._updateTether();
      });
    }
  }, {
    key: '_updateTether',
    value: function _updateTether() {
      var _props2 = this.props,
          renderElementTag = _props2.renderElementTag,
          renderElementTo = _props2.renderElementTo,
          customProps = _objectWithoutProperties(_props2, ['renderElementTag', 'renderElementTo']); // eslint-disable-line no-unused-vars


      var tetherOptions = _extends({
        target: this._targetNode,
        element: this._elementParentNode
      }, customProps);

      if (!this._tether) {
        this._tether = new _tether2.default(tetherOptions);
      } else {
        this._tether.setOptions(tetherOptions);
      }

      this._tether.position();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.target;
    }
  }]);

  return Popup;
}(_react2.default.Component);

Popup.propTypes = propTypes;
Popup.defaultProps = defaultProps;

exports.default = Popup;