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

require('./TetherComponent.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var attachmentPositions = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var propTypes = {
  classes: _react.PropTypes.object,
  classPrefix: _react.PropTypes.string,
  content: _react.PropTypes.element,
  constraints: _react.PropTypes.array,
  contentAttachment: _react.PropTypes.oneOf(attachmentPositions).isRequired,
  contentOffset: _react.PropTypes.string,
  isEnabled: _react.PropTypes.bool,
  optimizations: _react.PropTypes.object,
  renderElementTag: _react.PropTypes.string,
  renderElementTo: _react.PropTypes.any,
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

  function TetherComponent(props) {
    _classCallCheck(this, TetherComponent);

    var _this = _possibleConstructorReturn(this, (TetherComponent.__proto__ || Object.getPrototypeOf(TetherComponent)).call(this, props));

    _this.setTargetNode = _this.setTargetNode.bind(_this);
    _this.handleOnUpdate = _this.handleOnUpdate.bind(_this);
    _this.handleOnRepositioned = _this.handleOnRepositioned.bind(_this);
    return _this;
  }

  _createClass(TetherComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
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
        this._tether.off('update');
        this._tether.off('repositioned');
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
        this._tether.on('update', this.handleOnUpdate);
        this._tether.on('repositioned', this.handleOnRepositioned);
      } else {
        this._tether.setOptions(tetherOptions);
      }

      this._tether.position();
    }
  }, {
    key: 'handleOnUpdate',
    value: function handleOnUpdate(event) {
      if (this.props.onUpdate) {
        this.props.onUpdate(event);
      }
    }
  }, {
    key: 'handleOnRepositioned',
    value: function handleOnRepositioned(event) {
      if (this.props.onRepositioned) {
        this.props.onRepositioned(event);
      }
    }
  }, {
    key: 'setTargetNode',
    value: function setTargetNode(node) {
      this._targetNode = node;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          classes = _props3.classes,
          classPrefix = _props3.classPrefix,
          content = _props3.content,
          constraints = _props3.constraints,
          contentAttachment = _props3.contentAttachment,
          contentOffset = _props3.contentOffset,
          isEnabled = _props3.isEnabled,
          optimizations = _props3.optimizations,
          renderElementTag = _props3.renderElementTag,
          renderElementTo = _props3.renderElementTo,
          target = _props3.target,
          targetAttachment = _props3.targetAttachment,
          targetModifier = _props3.targetModifier,
          targetOffset = _props3.targetOffset,
          onUpdate = _props3.onUpdate,
          onRepositioned = _props3.onRepositioned,
          customProps = _objectWithoutProperties(_props3, ['classes', 'classPrefix', 'content', 'constraints', 'contentAttachment', 'contentOffset', 'isEnabled', 'optimizations', 'renderElementTag', 'renderElementTo', 'target', 'targetAttachment', 'targetModifier', 'targetOffset', 'onUpdate', 'onRepositioned']);

      var wrapperClassNames = (0, _classnames2.default)(['terra-TetherComponent', customProps.className]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: wrapperClassNames, ref: this.setTargetNode }),
        this.props.target
      );
    }
  }]);

  return TetherComponent;
}(_react2.default.Component);

TetherComponent.propTypes = propTypes;
TetherComponent.defaultProps = defaultProps;
TetherComponent.attachmentPositions = attachmentPositions;

exports.default = TetherComponent;