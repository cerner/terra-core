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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

var _TetherOverlay = require('./TetherOverlay');

var _TetherOverlay2 = _interopRequireDefault(_TetherOverlay);

require('./TetherComponent.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var attachmentPositions = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var propTypes = {
  /**
   * A hash of tether classes which should be changed or disabled.
   */
  classes: _propTypes2.default.object,
  /**
   * The prefix placed at the beginning of the default classes.
   */
  classPrefix: _propTypes2.default.string,
  /**
   * Rule set to pass to tether, contraining the content to.
   */
  constraints: _propTypes2.default.array,
  /**
   * Content to display within the tethered frame.
   */
  content: _propTypes2.default.element,
  /**
   * String pair of top, middle, bottom, and left, center, right.
   */
  contentAttachment: _propTypes2.default.oneOf(attachmentPositions).isRequired,
  /**
   * String pair of top and left offset, ie "10px -4px".  
   */
  contentOffset: _propTypes2.default.string,
  /**
   * Should tethering be disabled following the initial presentation.
   */
  disableOnPosition: _propTypes2.default.bool,
  /**
   * Should the scrolling eatin overlay be injected.
   */
  disablePageScroll: _propTypes2.default.bool,
  /**
   * Should element be tethered to the page.
   */
  isEnabled: _propTypes2.default.bool,
  /**
   * The ability to disable "gpu" and "moveElement" optimizations.
   */
  optimizations: _propTypes2.default.object,
  /**
   * Element tag for the containg element.
   */
  renderElementTag: _propTypes2.default.string,
  /**
   * Html reference to have content appended to.
   */
  renderElementTo: _propTypes2.default.any,
  /**
   * Required element to be presented and tethered to.
   */
  target: _propTypes2.default.element.isRequired,
  /**
   * String pair of top, middle, bottom, and left, center, right.
   */
  targetAttachment: _propTypes2.default.oneOf(attachmentPositions),
  /**
   * Can be set to 'visible' or 'scroll-handle'.
   */
  targetModifier: _propTypes2.default.string,
  /**
   * String pair of top and left offset, ie "10px -4px".
   */
  targetOffset: _propTypes2.default.string,
  /**
   * Callback function when each tether component is adjusted.
   */
  onUpdate: _propTypes2.default.func,
  /**
   * Callback function when the tether is moved.
   */
  onRepositioned: _propTypes2.default.func
};

var defaultProps = {
  disableOnPosition: false,
  disablePageScroll: false,
  renderElementTag: 'div',
  renderElementTo: null
};

var TetherComponent = function (_React$Component) {
  _inherits(TetherComponent, _React$Component);

  _createClass(TetherComponent, null, [{
    key: 'isNodeInsideModal',
    value: function isNodeInsideModal(node) {
      if (node) {
        var parentNode = node.parentNode;
        while (parentNode && parentNode.classList) {
          if (parentNode.classList.contains('terra-Modal')) {
            return true;
            break;
          }
          parentNode = parentNode.parentNode;
        }
      }
      return false;
    }
  }]);

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
      this._targetInsideModal = TetherComponent.isNodeInsideModal(this._targetNode);
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
      if (this._tether) {
        this._tether.disable();
      }
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (this._tether) {
        this._tether.enable();
      }
    }
  }, {
    key: 'position',
    value: function position() {
      if (this._tether) {
        this._tether.position();
      }
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      if (this._elementParentNode) {
        _reactDom2.default.unmountComponentAtNode(this._elementParentNode);
        this._elementParentNode.parentNode.removeChild(this._elementParentNode);
      }

      if (this._overlayParentNode) {
        _reactDom2.default.unmountComponentAtNode(this._overlayParentNode);
        this._overlayParentNode.parentNode.removeChild(this._overlayParentNode);
      }

      if (this._tether) {
        this._tether.off('update');
        this._tether.off('repositioned');
        this._tether.destroy();
      }

      this._elementParentNode = null;
      this._overlayParentNode = null;
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

      var renderTo = renderElementTo || document.body;
      if (!this._elementParentNode) {
        var elementClassNames = (0, _classnames2.default)(['terra-TetherComponent-element', { 'terra-TetherComponent-element--modal': this._targetInsideModal }]);

        this._elementParentNode = document.createElement(renderElementTag);
        this._elementParentNode.className = elementClassNames;
        renderTo.appendChild(this._elementParentNode);
      }

      var renderSubContent = function renderSubContent() {
        _reactDom2.default.unstable_renderSubtreeIntoContainer(_this2, content, _this2._elementParentNode, function () {
          _this2._updateTether();
        });
      };

      if (this.props.disablePageScroll) {
        var overlay = _react2.default.createElement(_TetherOverlay2.default, { displayAboveModal: this._targetInsideModal });

        if (!this._overlayParentNode) {
          this._overlayParentNode = document.createElement(renderElementTag);
          this._overlayParentNode.style.cssText = 'top: 0px;left: 0px;position: absolute;';
          renderTo.appendChild(this._overlayParentNode);
        }

        _reactDom2.default.unstable_renderSubtreeIntoContainer(this, overlay, this._overlayParentNode, function () {
          renderSubContent();
        });
      } else {
        renderSubContent();
      }
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
        tetherOptions.enabled = true;
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
    key: 'getNodeBounds',
    value: function getNodeBounds() {
      var targetBounds = _tether2.default.Utils.getBounds(this._targetNode);
      var presenterBounds = _tether2.default.Utils.getBounds(this._elementParentNode);
      return { targetBounds: targetBounds, presenterBounds: presenterBounds };
    }
  }, {
    key: 'handleOnUpdate',
    value: function handleOnUpdate(event) {
      if (this.props.onUpdate) {
        var bounds = this.getNodeBounds();
        this.props.onUpdate(event, bounds.targetBounds, bounds.presenterBounds);
      }
    }
  }, {
    key: 'handleOnRepositioned',
    value: function handleOnRepositioned(event) {
      if (this.props.disableOnPosition) {
        this.disable();
      }

      if (this.props.onRepositioned) {
        var bounds = this.getNodeBounds();
        this.props.onRepositioned(event, bounds.targetBounds, bounds.presenterBounds);
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
          constraints = _props3.constraints,
          content = _props3.content,
          contentAttachment = _props3.contentAttachment,
          contentOffset = _props3.contentOffset,
          disableOnPosition = _props3.disableOnPosition,
          disablePageScroll = _props3.disablePageScroll,
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
          customProps = _objectWithoutProperties(_props3, ['classes', 'classPrefix', 'constraints', 'content', 'contentAttachment', 'contentOffset', 'disableOnPosition', 'disablePageScroll', 'isEnabled', 'optimizations', 'renderElementTag', 'renderElementTo', 'target', 'targetAttachment', 'targetModifier', 'targetOffset', 'onUpdate', 'onRepositioned']);

      var wrapperClassNames = (0, _classnames2.default)(['terra-TetherComponent-element', customProps.className]);

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