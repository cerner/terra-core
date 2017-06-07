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

var _tether = require('tether');

var _tether2 = _interopRequireDefault(_tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ATTACHMENT_POSITIONS = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

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
   * Rule set to pass to tether, contraining the content to by setting 'to', 'attachment', and/or 'pin'.
   * Also allows for class aliasing or 'outOfBoundsClass' and 'pinnedClass'.
   */
  constraints: _propTypes2.default.array,
  /**
   * The content to be tethered.
   */
  content: _propTypes2.default.element,
  /**
   * String pair of top, middle, bottom, and left, center, right.
   */
  contentAttachment: _propTypes2.default.oneOf(ATTACHMENT_POSITIONS).isRequired,
  /**
   * String pair of top and left offset, ie "10px -4px".
   */
  contentOffset: _propTypes2.default.string,
  /**
   * Should tethering be disabled following the initial positioning.
   */
  disableOnPosition: _propTypes2.default.bool,
  /**
   * Should element be tethered to the page.
   */
  isEnabled: _propTypes2.default.bool,
  /**
   * The ability to disable "gpu" and "moveElement" optimizations.
   */
  optimizations: _propTypes2.default.object,
  /**
   * Required element to be presented and tethered to.
   */
  targetRef: _propTypes2.default.func.isRequired,
  /**
   * String pair of top, middle, bottom, and left, center, right.
   */
  targetAttachment: _propTypes2.default.oneOf(ATTACHMENT_POSITIONS),
  /**
   * Can be set to 'visible' or 'scroll-handle'.
   */
  targetModifier: _propTypes2.default.string,
  /**
   * String pair of top and left offset, ie "10px -4px".
   */
  targetOffset: _propTypes2.default.string,
  /**
   * Callback function when each tether component is updated.
   */
  onUpdate: _propTypes2.default.func,
  /**
   * Callback function when the tether is moved.
   */
  onRepositioned: _propTypes2.default.func
};

var defaultProps = {
  isEnabled: false,
  disableOnPosition: false
};

var TetherComponent = function (_React$Component) {
  _inherits(TetherComponent, _React$Component);

  function TetherComponent(props) {
    _classCallCheck(this, TetherComponent);

    var _this = _possibleConstructorReturn(this, (TetherComponent.__proto__ || Object.getPrototypeOf(TetherComponent)).call(this, props));

    _this.setElementNode = _this.setElementNode.bind(_this);
    _this.handleOnUpdate = _this.handleOnUpdate.bind(_this);
    _this.handleOnRepositioned = _this.handleOnRepositioned.bind(_this);
    return _this;
  }

  _createClass(TetherComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroy();
    }
  }, {
    key: 'setElementNode',
    value: function setElementNode(node) {
      this.elementNode = node;
    }
  }, {
    key: 'getNodeBounds',
    value: function getNodeBounds() {
      var targetBounds = _tether2.default.Utils.getBounds(this.props.targetRef());
      var presenterBounds = _tether2.default.Utils.getBounds(this.elementNode);
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
    key: 'disable',
    value: function disable() {
      if (this.tether) {
        this.tether.disable();
      }
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (this.tether) {
        this.tether.enable();
      }
    }
  }, {
    key: 'position',
    value: function position() {
      if (this.tether) {
        this.tether.position();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.elementNode) {
        this.elementNode.parentNode.removeChild(this.elementNode);
      }

      if (this.tether) {
        this.tether.off('update');
        this.tether.off('repositioned');
        this.tether.destroy();
      }

      this.elementNode = null;
      this.tether = null;
    }
  }, {
    key: 'update',
    value: function update() {
      var content = this.props.content;


      if (!content) {
        if (this.tether) {
          this.destroy();
        }
        return;
      }

      this.updateTether();
    }
  }, {
    key: 'updateTether',
    value: function updateTether() {
      var _props = this.props,
          isEnabled = _props.isEnabled,
          targetRef = _props.targetRef,
          content = _props.content,
          contentAttachment = _props.contentAttachment,
          contentOffset = _props.contentOffset,
          customProps = _objectWithoutProperties(_props, ['isEnabled', 'targetRef', 'content', 'contentAttachment', 'contentOffset']); // eslint-disable-line no-unused-vars

      var tetherOptions = _extends({
        attachment: contentAttachment,
        element: this.elementNode,
        target: targetRef()
      }, customProps);

      // Aliased parameters
      if (contentOffset) {
        tetherOptions.offset = contentOffset;
      }
      if (isEnabled !== undefined) {
        tetherOptions.enabled = true;
      }

      if (!this.tether) {
        this.tether = new _tether2.default(tetherOptions);
        this.tether.on('update', this.handleOnUpdate);
        this.tether.on('repositioned', this.handleOnRepositioned);
      } else {
        this.tether.setOptions(tetherOptions);
      }

      this.tether.position();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          classes = _props2.classes,
          classPrefix = _props2.classPrefix,
          constraints = _props2.constraints,
          content = _props2.content,
          contentAttachment = _props2.contentAttachment,
          contentOffset = _props2.contentOffset,
          disableOnPosition = _props2.disableOnPosition,
          isEnabled = _props2.isEnabled,
          optimizations = _props2.optimizations,
          targetRef = _props2.targetRef,
          targetAttachment = _props2.targetAttachment,
          targetModifier = _props2.targetModifier,
          targetOffset = _props2.targetOffset,
          onUpdate = _props2.onUpdate,
          onRepositioned = _props2.onRepositioned,
          customProps = _objectWithoutProperties(_props2, ['classes', 'classPrefix', 'constraints', 'content', 'contentAttachment', 'contentOffset', 'disableOnPosition', 'isEnabled', 'optimizations', 'targetRef', 'targetAttachment', 'targetModifier', 'targetOffset', 'onUpdate', 'onRepositioned']);

      // Delete the closePortal prop that comes from react-portal.


      delete customProps.closePortal;

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { ref: this.setElementNode }),
        content
      );
    }
  }]);

  return TetherComponent;
}(_react2.default.Component);

TetherComponent.propTypes = propTypes;
TetherComponent.defaultProps = defaultProps;
TetherComponent.attachmentPositions = ATTACHMENT_POSITIONS;

exports.default = TetherComponent;