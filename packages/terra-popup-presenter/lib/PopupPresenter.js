'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _PopupFrame = require('./PopupFrame');

var _PopupFrame2 = _interopRequireDefault(_PopupFrame);

var _PopupArrow = require('./PopupArrow');

var _PopupArrow2 = _interopRequireDefault(_PopupArrow);

var _TetherComponent = require('./TetherComponent');

var _TetherComponent2 = _interopRequireDefault(_TetherComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The children list items passed to the component.
   */
  closeOnEsc: _react.PropTypes.bool,
  closeOnOutsideClick: _react.PropTypes.bool,
  content: _react.PropTypes.element,
  contentAttachment: _react.PropTypes.oneOf(_TetherComponent2.default.attachmentPositions).isRequired,
  isOpen: _react.PropTypes.bool,
  onRequestClose: _react.PropTypes.func,
  showArrow: _react.PropTypes.bool,
  target: _react.PropTypes.element.isRequired
};

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var ARROW_OFFSET = 10;
var ARROW_CLASSES = {
  top: 'terra-PopupArrow--alignTop',
  bottom: 'terra-PopupArrow--alignBottom',
  left: 'terra-PopupArrow--alignLeft',
  right: 'terra-PopupArrow--alignRight'
};

var FRAME_CLASSES = {
  top: 'terra-PopupFrame--arrowTop',
  bottom: 'terra-PopupFrame--arrowBottom',
  left: 'terra-PopupFrame--arrowLeft',
  right: 'terra-PopupFrame--arrowRight'
};

var defaultProps = {
  isOpen: false,
  showArrow: false
};

var WrappedPopupFrame = (0, _reactOnclickoutside2.default)(_PopupFrame2.default);

var PopupPresenter = function (_React$Component) {
  _inherits(PopupPresenter, _React$Component);

  _createClass(PopupPresenter, null, [{
    key: 'mirrorAttachment',
    value: function mirrorAttachment(attachment) {
      var parsedValue = PopupPresenter.parseStringPosition(attachment);
      var horizontal = parsedValue.horizontal;
      var vertical = parsedValue.vertical;

      if (parsedValue.vertical === 'middle') {
        horizontal = MIRROR_LR[parsedValue.horizontal];
      } else {
        vertical = MIRROR_TB[parsedValue.vertical];
      }

      return vertical + ' ' + horizontal;
    }
  }, {
    key: 'parseStringPosition',
    value: function parseStringPosition(value) {
      var _value$split = value.split(' '),
          _value$split2 = _slicedToArray(_value$split, 2),
          vertical = _value$split2[0],
          horizontal = _value$split2[1];

      return { vertical: vertical, horizontal: horizontal };
    }
  }, {
    key: 'attachPositionFromAlignment',
    value: function attachPositionFromAlignment(alignment, start, length) {
      if (alignment === 'Middle') {
        return start + length / 2;
      } else if (alignment === 'End') {
        return start + length;
      }
      return start;
    }
  }, {
    key: 'arrowPositionFromBounds',
    value: function arrowPositionFromBounds(targetBounds, popUpBounds, contentAttachment, offset) {
      var parsedAttachment = PopupPresenter.parseStringPosition(contentAttachment);

      if (['top', 'bottom'].indexOf(parsedAttachment.vertical) >= 0) {
        if (targetBounds.top < popUpBounds.top && popUpBounds.top > offset) {
          return 'top';
        } else if (targetBounds.bottom > popUpBounds.bottom && popUpBounds.bottom > offset) {
          return 'bottom';
        }
      } else {
        if (targetBounds.left < popUpBounds.left && popUpBounds.left > offset) {
          return 'left';
        } else if (targetBounds.right > popUpBounds.right && popUpBounds.right > offset) {
          return 'right';
        }
      }
    }
  }]);

  function PopupPresenter(props) {
    _classCallCheck(this, PopupPresenter);

    var _this = _possibleConstructorReturn(this, (PopupPresenter.__proto__ || Object.getPrototypeOf(PopupPresenter)).call(this, props));

    _this.handleTetherRepositioned = _this.handleTetherRepositioned.bind(_this);
    _this.setArrowNode = _this.setArrowNode.bind(_this);
    _this.setFrameNode = _this.setFrameNode.bind(_this);
    return _this;
  }

  _createClass(PopupPresenter, [{
    key: 'setArrowPosition',
    value: function setArrowPosition(targetBounds, popUpBounds) {
      var parsedAttachment = PopupPresenter.parseStringPosition(this.props.contentAttachment);
      var isVerticalPosition = ['top', 'bottom'].indexOf(parsedAttachment.vertical) >= 0;
      var originalPosition = isVerticalAlignment >= 0 ? parsedAttachment.vertical : parsedAttachment.horizontal;
      var position = PopupPresenter.arrowPositionFromBounds(targetBounds, popUpBounds, this.props.contentAttachment, ARROW_OFFSET);

      if (!position) {
        this._frameNode.classList.remove(FRAME_CLASSES[originalPosition]);
        return;
      }

      if (position !== originalPosition) {
        this._frameNode.classList.remove(FRAME_CLASSES[originalPosition]);
        this._frameNode.classList.add(FRAME_CLASSES[position]);
      }

      this._arrowNode.classList.add(ARROW_CLASSES[position]);
      if (isVerticalPosition) {
        this._arrowNode.style.left = this.leftOffset(targetBounds, popUpBounds, parsedAttachment.horizontal, ARROW_OFFSET);
      } else {
        this._arrowNode.style.top = this.topOffset(targetBounds, popUpBounds, ARROW_OFFSET);
      }
    }
  }, {
    key: 'leftOffset',
    value: function leftOffset(targetBounds, popUpBounds, arrowAlignment, offset) {
      var popupStart = popUpBounds.left + offset;
      var popupEnd = popUpBounds.left + popUpBounds.width - offset;

      var targetAttachPosition = PopupPresenter.attachPositionFromAlignment(arrowAlignment, targetBounds.left, targetBounds.width);
      var popupAttachPosition = PopupPresenter.attachPositionFromAlignment(arrowAlignment, popupStart, popupStart - popupEnd);

      if (targetAttachPosition >= insetStart && targetAttachPosition <= insetEnd) {
        return Math.abs(popupAttachPosition - targetAttachPosition).toString() + 'px';
      }
    }
  }, {
    key: 'topOffset',
    value: function topOffset(targetBounds, popUpBounds, offset) {
      var popupStart = popUpBounds.top + offset;
      var popupEnd = popUpBounds.top + popUpBounds.height - offset;

      var targetAttachPosition = targetBounds.top + targetBounds.height / 2;
      var popupAttachPosition = popUpBounds.top + (popupStart - popupEnd) / 2;

      if (targetAttachPosition >= popupStart && targetAttachPosition <= popupEnd) {
        return Math.abs(popupAttachPosition - targetAttachPosition).toString() + 'px';
      }
    }
  }, {
    key: 'handleTetherRepositioned',
    value: function handleTetherRepositioned(event, targetBounds, presenterBounds) {
      if (this._arrowNode) {
        this.setArrowPosition(targetBounds, presenterBounds);
      }
    }
  }, {
    key: 'setArrowNode',
    value: function setArrowNode(node) {
      this._arrowNode = node;
    }
  }, {
    key: 'setFrameNode',
    value: function setFrameNode(node) {
      this._frameNode = node;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          content = _props.content,
          contentOffset = _props.contentOffset,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          onUpdate = _props.onUpdate,
          optimizations = _props.optimizations,
          renderElementTag = _props.renderElementTag,
          renderElementTo = _props.renderElementTo,
          showArrow = _props.showArrow,
          targetModifier = _props.targetModifier,
          targetOffset = _props.targetOffset,
          customProps = _objectWithoutProperties(_props, ['classes', 'closeOnEsc', 'closeOnOutsideClick', 'content', 'contentOffset', 'isOpen', 'onRequestClose', 'onUpdate', 'optimizations', 'renderElementTag', 'renderElementTo', 'showArrow', 'targetModifier', 'targetOffset']); // eslint-disable-line no-unused-vars

      var wrappedContent = void 0;
      if (isOpen && content) {
        var arrow = void 0;
        if (showArrow) {
          arrow = _react2.default.createElement(_PopupArrow2.default, { refCallback: this.setArrowNode });
        }

        var frameProps = {
          arrow: arrow,
          content: content,
          closeOnEsc: closeOnEsc,
          closeOnOutsideClick: closeOnOutsideClick,
          onRequestClose: onRequestClose,
          refCallback: this.setFrameNode
        };

        wrappedContent = _react2.default.createElement(WrappedPopupFrame, frameProps);
      }

      var constraints = [{
        to: 'window',
        attachment: 'together',
        pin: true
      }];

      var tetherOptions = _extends({}, customProps, {
        classPrefix: 'terra-Popup',
        constraints: constraints,
        content: wrappedContent,
        disableAfterPosition: true,
        disablePageScrolling: true,
        isEnabled: true,
        onRepositioned: this.handleTetherRepositioned,
        targetAttachment: PopupPresenter.mirrorAttachment(this.props.contentAttachment)
      });

      return _react2.default.createElement(_TetherComponent2.default, tetherOptions);
    }
  }]);

  return PopupPresenter;
}(_react2.default.Component);

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

exports.default = PopupPresenter;