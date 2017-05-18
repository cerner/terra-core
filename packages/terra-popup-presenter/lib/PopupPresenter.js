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
var ARROW_CLASSES = ['terra-PopupArrow--alignTop', 'terra-PopupArrow--alignBottom', 'terra-PopupArrow--alignLeft', 'terra-PopupArrow--alignRight'];

var FRAME_CLASSES = ['terra-PopupFrame--arrowTop', 'terra-PopupFrame--arrowBottom', 'terra-PopupFrame--arrowLeft', 'terra-PopupFrame--arrowRight'];

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
      var parsedValue = parePopupPresenter.parseStringPosition(attachment);
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
    key: 'arrowPositionFromBounds',
    value: function arrowPositionFromBounds(targetBounds, popUpBounds) {
      var pointOverlap = this.cornersOverlapByPopup(targetBounds, popUpBounds);

      if (pointOverlap.topLeft && pointOverlap.topRight && pointOverlap.bottomLeft && pointOverlap.bottomRight) {
        return [];
      }

      if (pointOverlap.topLeft && pointOverlap.topRight) {
        return ['bottom'];
      }

      if (pointOverlap.topRight && pointOverlap.bottomRight) {
        return ['left'];
      }

      if (pointOverlap.bottomLeft && pointOverlap.bottomRight) {
        return ['top'];
      }

      if (pointOverlap.topLeft && pointOverlap.bottomLeft) {
        return ['right'];
      }

      if (pointOverlap.topLeft) {
        return ['top', 'left'];
      }

      if (pointOverlap.topRight) {
        return ['top', 'right'];
      }

      if (pointOverlap.bottomLeft) {
        return ['bottom', 'left'];
      }

      if (pointOverlap.bottomRight) {
        return ['bottom', 'right'];
      }

      return ['top', 'bottom', 'left', 'right'];
    }
  }, {
    key: 'cornersOverlapByPopup',
    value: function cornersOverlapByPopup(targetBounds, popUpBounds) {
      var pointOverlap = {};
      var topLeft = { x: targetBounds.left, y: targetBounds.top };
      var topRight = { x: targetBounds.left + targetBounds.width, y: targetBounds.top };
      var bottomLeft = { x: targetBounds.left, y: targetBounds.top + targetBounds.height };
      var bottomRight = { x: targetBounds.left + targetBounds.width, y: targetBounds.top + targetBounds.height };

      pointOverlap.topLeft = this.isPointContainedWithinBounds(topLeft, popUpBounds);
      pointOverlap.topRight = this.isPointContainedWithinBounds(topRight, popUpBounds);
      pointOverlap.bottomLeft = this.isPointContainedWithinBounds(bottomLeft, popUpBounds);
      pointOverlap.bottomRight = this.isPointContainedWithinBounds(bottomRight, popUpBounds);

      return pointOverlap;
    }
  }, {
    key: 'isPointContainedWithinBounds',
    value: function isPointContainedWithinBounds(point, bounds) {
      if (point.x < bounds.left || point.x > bounds.left + bounds.width) {
        return false;
      } else if (point.y < bounds.top || point.y > bounds.top + bounds.height) {
        return false;
      }
      return true;
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
    key: 'setArrowPosition',
    value: function setArrowPosition(targetBounds, popUpBounds) {
      var position = PopupPresenter.arrowPositionFromBounds(targetBounds, popUpBounds);
      var targetAttachment = PopupPresenter.mirrorAttachment(this.props.contentAttachment);

      if (position) {
        return;
      }

      if (position.indexOf('top') >= 0) {
        this._arrowNode.style.top = this.horizontalOffset(targetBounds, popUpBounds, targetAttachment, this.props.contentAttachment, ARROW_OFFSET);
        this._arrowNode.classList.add(ARROW_CLASSES[0]);
        this._frameNode.classList.add(FRAME_CLASSES[0]);
      } else if (position.indexOf('bottom') >= 0) {
        this._arrowNode.style.top = this.horizontalOffset(targetBounds, popUpBounds, targetAttachment, this.props.contentAttachment, ARROW_OFFSET);
        this._arrowNode.classList.add(ARROW_CLASSES[1]);
        this._frameNode.classList.add(FRAME_CLASSES[1]);
      } else if (position.indexOf('left') >= 0) {
        this._arrowNode.style.top = this.verticalOffset(targetBounds, popUpBounds, targetAttachment, this.props.contentAttachment, ARROW_OFFSET);
        this._arrowNode.classList.add(ARROW_CLASSES[2]);
        this._frameNode.classList.add(FRAME_CLASSES[2]);
      } else {
        this._arrowNode.style.top = this.verticalOffset(targetBounds, popUpBounds, targetAttachment, this.props.contentAttachment, ARROW_OFFSET);
        this._arrowNode.classList.add(ARROW_CLASSES[3]);
        this._frameNode.classList.add(FRAME_CLASSES[3]);
      }
    }
  }, {
    key: 'horizontalOffset',
    value: function horizontalOffset(targetBounds, popUpBounds, targetAttachment, contentAttachment, offset) {
      if (this.horizontalSegmentIntersected(targetBounds, popUpBounds, offset)) {
        var insetStart = popUpBounds.left + offset;
        var insetEnd = popUpBounds.left + popUpBounds.width - offset;
        var targetStart = targetBounds.left;
        var targetEnd = targetBounds.left + targetBounds.width;

        var targetAlignment = PopupPresenter.arrowAlignmentFromAttachment(targetAttachment);
        var targetAttachPosition = this.attachPositionFromAlignment(targetAlignment, targetBounds.left, targetBounds.width);

        var contentAlignment = PopupPresenter.arrowAlignmentFromAttachment(contentAttachment);
        var contentAttachPosition = this.attachPositionFromAlignment(contentAlignment, popUpBounds.left, popUpBounds.width);

        if (targetAttachPosition >= insetStart && targetAttachPosition <= insetEnd) {
          return Math.abs(contentAttachPosition - targetAttachPosition).toString() + 'px';
        }
      }
      return '';
    }
  }, {
    key: 'verticalOffset',
    value: function verticalOffset(targetBounds, popUpBounds, targetAttachment, contentAttachment, offset) {
      if (this.verticalSegmentIntersected(targetBounds, popUpBounds)) {
        var insetStart = popUpBounds.top + offset;
        var insetEnd = popUpBounds.top + popUpBounds.height - offset;
        var targetStart = targetBounds.top;
        var targetEnd = targetBounds.top + targetBounds.height;

        var targetAlignment = PopupPresenter.arrowAlignmentFromAttachment(targetAttachment);
        var targetAttachPosition = this.attachPositionFromAlignment(targetAlignment, targetBounds.top, targetBounds.height);

        var contentAlignment = PopupPresenter.arrowAlignmentFromAttachment(contentAttachment);
        var contentAttachPosition = this.attachPositionFromAlignment(contentAlignment, popUpBounds.top, popUpBounds.height);

        if (targetAttachPosition >= insetStart && targetAttachPosition <= insetEnd) {
          return Math.abs(contentAttachPosition - targetAttachPosition).toString() + 'px';
        }
      }
      return '';
    }
  }, {
    key: 'horizontalSegmentIntersected',
    value: function horizontalSegmentIntersected(targetBounds, popUpBounds, arrowOffset) {
      var firstStart = popUpBounds.left + arrowOffset;
      var firstEnd = popUpBounds.left + popUpBounds.width - arrowOffset;
      var secondStart = targetBounds.left;
      var secondEnd = targetBounds.left + targetBounds.width;

      return this.segmentsIntersected(firstStart, firstEnd, secondStart, secondEnd);
    }
  }, {
    key: 'verticalSegmentIntersected',
    value: function verticalSegmentIntersected(targetBounds, popUpBounds, arrowOffset) {
      var firstStart = popUpBounds.top + arrowOffset;
      var firstEnd = popUpBounds.top + popUpBounds.height - arrowOffset;
      var secondStart = targetBounds.top;
      var secondEnd = targetBounds.top + targetBounds.height;

      return this.segmentsIntersected(firstStart, firstEnd, secondStart, secondEnd);
    }
  }, {
    key: 'segmentsIntersected',
    value: function segmentsIntersected(firstStart, firstEnd, secondStart, secondEnd) {
      if (firstStart >= secondStart && firstStart <= secondEnd || firstEnd >= secondStart && firstEnd <= secondEnd) {
        return true;
      } else if (secondStart >= firstStart && secondStart <= firstEnd || secondEnd >= firstStart && secondEnd <= firstEnd) {
        return true;
      }
      return false;
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
          contentAttachment = _props.contentAttachment,
          contentOffset = _props.contentOffset,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          onUpdate = _props.onUpdate,
          optimizations = _props.optimizations,
          renderElementTag = _props.renderElementTag,
          renderElementTo = _props.renderElementTo,
          showArrow = _props.showArrow,
          target = _props.target,
          targetModifier = _props.targetModifier,
          targetOffset = _props.targetOffset,
          customProps = _objectWithoutProperties(_props, ['classes', 'closeOnEsc', 'closeOnOutsideClick', 'content', 'contentAttachment', 'contentOffset', 'isOpen', 'onRequestClose', 'onUpdate', 'optimizations', 'renderElementTag', 'renderElementTo', 'showArrow', 'target', 'targetModifier', 'targetOffset']); // eslint-disable-line no-unused-vars

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
        targetAttachment: PopupPresenter.mirrorAttachment(contentAttachment)
      });

      return _react2.default.createElement(_TetherComponent2.default, tetherOptions);
    }
  }]);

  return PopupPresenter;
}(_react2.default.Component);

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

exports.default = PopupPresenter;