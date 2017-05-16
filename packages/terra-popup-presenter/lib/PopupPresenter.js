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

require('./PopupPresenter.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  renderElementTo: _react.PropTypes.any,
  showArrow: _react.PropTypes.bool,
  target: _react.PropTypes.element.isRequired,
  targetAttachment: _react.PropTypes.oneOf(_TetherComponent2.default.attachmentPositions)
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

var defaultProps = {
  isOpen: false,
  showArrow: false
};

var WrappedPopupFrame = (0, _reactOnclickoutside2.default)(_PopupFrame2.default);

var PopupPresenter = function (_React$Component) {
  _inherits(PopupPresenter, _React$Component);

  _createClass(PopupPresenter, null, [{
    key: 'mirroredAttachment',
    value: function mirroredAttachment(attachment) {
      return 'top right'; //fix this
    }
  }, {
    key: 'arrowAlignmentFromAttachment',
    value: function arrowAlignmentFromAttachment(attachment) {
      var parsedAttachment = PopupPresenter.parseStringPosition(attachment);

      if (parsedAttachment.vertical === 'middle' || parsedAttachment.horizontal === 'center') {
        return 'Center';
      } else if (parsedAttachment.horizontal === 'left') {
        return 'Start';
      } else {
        return 'End';
      }
    }
  }, {
    key: 'arrowPositionFromAttachment',
    value: function arrowPositionFromAttachment(attachment) {
      var parsedAttachment = PopupPresenter.parseStringPosition(attachment);

      if (parsedAttachment.vertical === 'top') {
        return 'Top';
      } else if (parsedAttachment.vertical === 'middle') {
        if (parsedAttachment.horizontal === 'left') {
          return 'Start';
        }
        return 'End';
      } else {
        return 'Bottom';
      }
    }
  }, {
    key: 'parseOffset',
    value: function parseOffset(value) {
      var parsedValue = PopupPresenter.parseStringPosition(value);
      return { vertical: parseFloat(parsedValue.vertical), horizontal: parseFloat(parsedValue.horizontal) };
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
    key: 'shouldDisplayArrow',
    value: function shouldDisplayArrow(showArrow, contentAttachment) {
      if (showArrow === true && contentAttachment === 'middle center') {
        return false;
      }
      return showArrow;
    }
  }, {
    key: 'calculateArrowOffest',
    value: function calculateArrowOffest(position, contentOffset, targetOffset) {
      var parsedContentValue = PopupPresenter.parseOffset(contentOffset); // {verticalPx, horizontalPx}
      var parsedTargetValue = PopupPresenter.parseOffset(targetOffset); // {verticalPx, horizontalPx}

      if (['Top', 'Bottom'].indexOf(position) >= 0) {
        return parsedContentValue.horizontal + parsedTargetValue.horizontal;
      }
      return parsedContentValue.vertical + parsedTargetValue.vertical;
    }
  }, {
    key: 'caculateContentOffset',
    value: function caculateContentOffset(contentAttachment, targetAttachment) {
      return '0 14px';
    }
  }]);

  function PopupPresenter(props) {
    _classCallCheck(this, PopupPresenter);

    var _this = _possibleConstructorReturn(this, (PopupPresenter.__proto__ || Object.getPrototypeOf(PopupPresenter)).call(this, props));

    _this.handleTetherUpdate = _this.handleTetherUpdate.bind(_this);
    _this.handleTetherRepositioned = _this.handleTetherRepositioned.bind(_this);
    _this.setArrowNode = _this.setArrowNode.bind(_this);
    return _this;
  }

  _createClass(PopupPresenter, [{
    key: 'arrowPositionFromBounds',
    value: function arrowPositionFromBounds(targetBounds, popUpBounds) {
      // need here for the transition
      var position = void 0;
      if (targetBounds.top >= popUpBounds.bottom) {
        position = 'bottom';
      } else if (targetBounds.right <= popUpBounds.left) {
        position = 'left';
      } else if (targetBounds.left >= popUpBounds.right) {
        position = 'right';
      } else if (targetBounds.bottom <= popUpBounds.top) {
        position = 'top';
      }
      return position;
    }
  }, {
    key: 'attachPositionFromAlignment',
    value: function attachPositionFromAlignment(alignment, start, width) {
      if (alignment === 'Middle') {
        return start + width / 2;
      } else if (alignment === 'End') {
        return start + width;
      }
      return start;
    }
  }, {
    key: 'setArrowPosition',
    value: function setArrowPosition(position, targetBounds, popUpBounds) {
      var arrowSet = false;
      var targetAttachment = this.props.targetAttachment;
      if (!targetAttachment) {
        targetAttachment = PopupPresenter.mirroredAttachment(this.props.contentAttachment);
      }

      var offset = 13;

      if (['bottom', 'top'].indexOf(position) >= 0) {
        if (this.horizontalSegmentIntersected(targetBounds, popUpBounds, offset)) {
          var insetStart = popUpBounds.left + offset;
          var insetEnd = popUpBounds.left + popUpBounds.width - offset;
          var targetStart = targetBounds.left;
          var targetEnd = targetBounds.left + targetBounds.width;

          var targetAlignment = PopupPresenter.arrowAlignmentFromAttachment(targetAttachment);
          var targetAttachPosition = this.attachPositionFromAlignment(targetAlignment, targetBounds.left, targetBounds.width);

          var contentAlignment = PopupPresenter.arrowAlignmentFromAttachment(this.props.contentAttachment);
          var contentAttachPosition = this.attachPositionFromAlignment(contentAlignment, popUpBounds.left, popUpBounds.width);

          var offsetValue = void 0;
          if (targetAttachPosition >= insetStart && targetAttachPosition <= insetEnd) {
            offsetValue = Math.abs(contentAttachPosition - targetAttachPosition);
          }

          this._arrowNode.style.left = offsetValue.toString() + 'px';
          arrowSet = true;
        }
      } else {
        if (this.verticalSegmentIntersected(targetBounds, popUpBounds)) {
          var _insetStart = popUpBounds.top + offset;
          var _insetEnd = popUpBounds.top + popUpBounds.height - offset;
          var _targetStart = targetBounds.top;
          var _targetEnd = targetBounds.top + targetBounds.height;

          var _targetAlignment = PopupPresenter.arrowAlignmentFromAttachment(targetAttachment);
          var _targetAttachPosition = this.attachPositionFromAlignment(_targetAlignment, targetBounds.top, targetBounds.height);

          var _contentAlignment = PopupPresenter.arrowAlignmentFromAttachment(this.props.contentAttachment);
          var _contentAttachPosition = this.attachPositionFromAlignment(_contentAlignment, popUpBounds.top, popUpBounds.height);

          var _offsetValue = void 0;
          if (_targetAttachPosition >= _insetStart && _targetAttachPosition <= _insetEnd) {
            _offsetValue = Math.abs(_contentAttachPosition - _targetAttachPosition);
          }

          this._arrowNode.style.top = _offsetValue.toString() + 'px';
          arrowSet = true;
        }
      }

      return arrowSet;
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
    key: 'handleTetherUpdate',
    value: function handleTetherUpdate(event, targetBounds, presenterBounds) {
      if (this._arrowNode) {
        var position = this.arrowPositionFromBounds(targetBounds, presenterBounds);
        var enabledArrows = this.setArrowPosition(position, targetBounds, presenterBounds);
      }
    }
  }, {
    key: 'handleTetherRepositioned',
    value: function handleTetherRepositioned(event, targetBounds, presenterBounds) {
      if (this._arrowNode) {
        var position = this.arrowPositionFromBounds(targetBounds, presenterBounds);
        var enabledArrows = this.setArrowPosition(position, targetBounds, presenterBounds);
      }
    }
  }, {
    key: 'setArrowNode',
    value: function setArrowNode(node) {
      this._arrowNode = node;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          content = _props.content,
          contentAttachment = _props.contentAttachment,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          renderElementTo = _props.renderElementTo,
          target = _props.target,
          targetAttachment = _props.targetAttachment,
          showArrow = _props.showArrow,
          customProps = _objectWithoutProperties(_props, ['closeOnEsc', 'closeOnOutsideClick', 'content', 'contentAttachment', 'isOpen', 'onRequestClose', 'renderElementTo', 'target', 'targetAttachment', 'showArrow']); // eslint-disable-line no-unused-vars

      var wrappedContent = void 0;
      var constraintContainer = document.getElementById('terra-FakeModal') || 'scrollParent'; //follow up here
      var contentOffset = PopupPresenter.caculateContentOffset(contentAttachment, targetAttachment);
      var constraints = [{
        to: 'scrollParent',
        pin: true
      }, {
        to: constraintContainer,
        attachment: 'together'
      }];

      // {
      //   to: 'scrollParent',
      //   pin: true
      // },
      // {
      //   to: constraintContainer,
      //   attachment: 'together',
      // }


      if (isOpen && content) {
        var arrowAlignment = PopupPresenter.arrowAlignmentFromAttachment(contentAttachment);
        var arrowPosition = PopupPresenter.arrowPositionFromAttachment(contentAttachment);

        var arrow = void 0;
        if (PopupPresenter.shouldDisplayArrow(showArrow, contentAttachment)) {
          var arrowClassNames = (0, _classnames2.default)(['terra-PopupFrame-arrow', _defineProperty({}, 'terra-PopupFrame-arrow--align' + arrowAlignment, arrowAlignment)]);
          arrow = _react2.default.createElement(_PopupArrow2.default, { position: arrowPosition, arrowRefCallback: this.setArrowNode });
        }

        var frameProps = {
          arrow: arrow,
          content: content,
          closeOnEsc: closeOnEsc,
          closeOnOutsideClick: closeOnOutsideClick,
          onRequestClose: onRequestClose,
          arrowPosition: arrowPosition
        };

        wrappedContent = _react2.default.createElement(
          WrappedPopupFrame,
          frameProps,
          arrow,
          content
        );
      }

      var tetherOptions = {
        contentAttachment: contentAttachment,
        isEnabled: true,
        target: target
      };

      //Optional parameters
      if (wrappedContent) {
        tetherOptions.content = wrappedContent;
      }
      if (constraints) {
        tetherOptions.constraints = constraints;
      }
      if (contentOffset) {
        tetherOptions.contentOffset = contentOffset;
      }
      if (targetAttachment) {
        tetherOptions.targetAttachment = targetAttachment;
      }
      if (renderElementTo) {
        tetherOptions.renderElementTo = renderElementTo;
      }
      // tetherOptions.onUpdate = this.handleTetherUpdate;
      tetherOptions.onRepositioned = this.handleTetherRepositioned;
      // tetherOptions.classPrefix = 'terra';

      return _react2.default.createElement(_TetherComponent2.default, _extends({}, tetherOptions, customProps));
    }
  }]);

  return PopupPresenter;
}(_react2.default.Component);

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

exports.default = PopupPresenter;