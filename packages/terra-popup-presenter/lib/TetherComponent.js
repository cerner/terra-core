'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var attachmentPositions = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var propTypes = {
  classes: _react.PropTypes.object,
  className: _react.PropTypes.string,
  classPrefix: _react.PropTypes.string,
  content: _react.PropTypes.element,
  constraints: _react.PropTypes.array,
  contentAttachment: _react.PropTypes.oneOf(attachmentPositions).isRequired,
  contentOffset: _react.PropTypes.string,
  id: _react.PropTypes.string,
  isEnabled: _react.PropTypes.bool,
  optimizations: _react.PropTypes.object,
  renderElementTag: _react.PropTypes.string,
  renderElementTo: _react.PropTypes.any,
  style: _react.PropTypes.object,
  target: _react.PropTypes.element.isRequired,
  targetAttachment: _react.PropTypes.oneOf(attachmentPositions),
  targetModifier: _react.PropTypes.string,
  targetOffset: _react.PropTypes.string,
  onUpdate: _react.PropTypes.func,
  onRepositioned: _react.PropTypes.func
};

var defaultProps = {
  renderElementTag: 'div',
  renderElementTo: null
};

var TetherComponent = function (_React$Component) {
  _inherits(TetherComponent, _React$Component);

  function TetherComponent() {
    _classCallCheck(this, TetherComponent);

    return _possibleConstructorReturn(this, (TetherComponent.__proto__ || Object.getPrototypeOf(TetherComponent)).apply(this, arguments));
  }

  _createClass(TetherComponent, [{
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


      if (!content) {
        if (this._tether) {
          this._destroy();
        }
        return;
      }

      if (!this._elementParentNode) {
        this._elementParentNode = document.createElement(renderElementTag);

        var renderTo = renderElementTo || document.body;
        renderTo.appendChild(this._elementParentNode);
      }

      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, content, this._elementParentNode, function () {
        _this2._updateTether();
      });
    }
  }, {
    key: '_updateTether',
    value: function _updateTether() {
      var _props2 = this.props,
          renderElementTag = _props2.renderElementTag,
          renderElementTo = _props2.renderElementTo,
          isEnabled = _props2.isEnabled,
          target = _props2.target,
          content = _props2.content,
          contentAttachment = _props2.contentAttachment,
          contentOffset = _props2.contentOffset,
          customProps = _objectWithoutProperties(_props2, ['renderElementTag', 'renderElementTo', 'isEnabled', 'target', 'content', 'contentAttachment', 'contentOffset']); // eslint-disable-line no-unused-vars

      var tetherOptions = _extends({
        attachment: contentAttachment,
        element: this._elementParentNode,
        target: this._targetNode
      }, customProps);

      //Aliased parameters
      if (contentOffset) {
        tetherOptions.offset = contentOffset;
      }
      if (isEnabled !== undefined) {
        tetherOptions.enabled = isEnabled;
      }

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

  return TetherComponent;
}(_react2.default.Component);

TetherComponent.propTypes = propTypes;
TetherComponent.defaultProps = defaultProps;
TetherComponent.attachmentPositions = attachmentPositions;

exports.default = TetherComponent;