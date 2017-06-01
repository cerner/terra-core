'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Popup = require('./Popup');

var _Popup2 = _interopRequireDefault(_Popup);

var _PopupArrow = require('./PopupArrow');

var _PopupArrow2 = _interopRequireDefault(_PopupArrow);

var _PopupOverlay = require('./PopupOverlay');

var _PopupOverlay2 = _interopRequireDefault(_PopupOverlay);

var _TetherComponent = require('./TetherComponent');

var _TetherComponent2 = _interopRequireDefault(_TetherComponent);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // consider dot notation


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

var propTypes = {
  /**
   * Bounding container for the popup.
   */
  boundingRef: _propTypes2.default.func,
  /**
   * The content to be displayed within the popup.
   */
  content: _propTypes2.default.element,
  /**
   * Attachment point for the popup, this will be mirrored to the target.
   */
  contentAttachment: _propTypes2.default.oneOf(_TetherComponent2.default.attachmentPositions),
  /**
   * Should the default header be disabled at small form factor.
   */
  disableHeader: _propTypes2.default.bool,
  /**
   * Should the popup be presented as open.
   */
  isOpen: _propTypes2.default.bool,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Should an arrow be placed at the attachment point.
   */
  showArrow: _propTypes2.default.bool,
  /**
   * Presenting element for the popup.
   */
  targetRef: _propTypes2.default.func,
  /**
   * String representation of the z-index.
   */
  zIndex: _propTypes2.default.string
};

var defaultProps = {
  contentAttachment: 'top center',
  disableHeader: false,
  isOpen: false,
  showArrow: false,
  zIndex: '7001'
};

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
      if (alignment === 'center') {
        return start + length / 2;
      } else if (alignment === 'right') {
        return start + length;
      }
      return start;
    }
  }, {
    key: 'arrowPositionFromBounds',
    value: function arrowPositionFromBounds(targetBounds, popUpBounds, attachment, offset) {
      if (['top', 'bottom'].indexOf(attachment.vertical) >= 0) {
        if (popUpBounds.left + popUpBounds.width - offset >= targetBounds.left && popUpBounds.left + offset <= targetBounds.left + targetBounds.width) {
          if (targetBounds.top < popUpBounds.top) {
            return 'top';
          } else if (targetBounds.bottom < popUpBounds.bottom) {
            return 'bottom';
          }
        }
      } else {
        if (popUpBounds.top + popUpBounds.height - offset >= targetBounds.top && popUpBounds.top + offset <= targetBounds.top + targetBounds.height) {
          if (targetBounds.left < popUpBounds.left) {
            return 'left';
          } else if (targetBounds.right < popUpBounds.right) {
            return 'right';
          }
        }
      }
    }
  }, {
    key: 'leftOffset',
    value: function leftOffset(targetBounds, popUpBounds, arrowAlignment, offset) {
      var targetAttachPosition = PopupPresenter.attachPositionFromAlignment(arrowAlignment, targetBounds.left, targetBounds.width);
      var popupAttachPosition = PopupPresenter.attachPositionFromAlignment(arrowAlignment, popUpBounds.left, popUpBounds.width);

      var leftOffset = targetAttachPosition - popupAttachPosition;

      var leftPosition = 0;
      if (arrowAlignment === 'right') {
        leftPosition = popUpBounds.width;
      } else if (arrowAlignment === 'center') {
        leftPosition = popUpBounds.width / 2;
      }

      var newLeftPosition = leftPosition + leftOffset;
      if (newLeftPosition > popUpBounds.width - offset) {
        newLeftPosition = popUpBounds.width - offset;
      } else if (newLeftPosition < offset) {
        newLeftPosition = offset;
      }

      return (offset + newLeftPosition).toString() + 'px';
    }
  }, {
    key: 'topOffset',
    value: function topOffset(targetBounds, popUpBounds, offset) {
      var targetAttachPosition = targetBounds.top + targetBounds.height / 2;
      var popupAttachPosition = popUpBounds.top + popUpBounds.height / 2;

      var topOffset = targetAttachPosition - popupAttachPosition;
      var topPosition = popUpBounds.height / 2;

      var newTopPosition = topPosition + topOffset;
      if (newTopPosition > popUpBounds.height - offset) {
        newTopPosition = popUpBounds.height - offset;
      } else if (newTopPosition < offset) {
        newTopPosition = offset;
      }

      return (offset + newTopPosition).toString() + 'px';
    }
  }, {
    key: 'setArrowPosition',
    value: function setArrowPosition(targetBounds, popUpBounds, attachment, arrowNode, popupNode) {
      var parsedAttachment = PopupPresenter.parseStringPosition(attachment);
      var position = PopupPresenter.arrowPositionFromBounds(targetBounds, popUpBounds, parsedAttachment, _PopupArrow2.default.arrowSize);

      if (!position) {
        arrowNode.classList.remove(_PopupArrow2.default.positionClasses['top']);
        arrowNode.classList.remove(_PopupArrow2.default.positionClasses['bottom']);
        arrowNode.classList.remove(_PopupArrow2.default.positionClasses['left']);
        arrowNode.classList.remove(_PopupArrow2.default.positionClasses['right']);
        return;
      }

      arrowNode.classList.remove(_PopupArrow2.default.oppositePositionClasses[position]);
      popupNode.classList.remove(_Popup2.default.oppositePositionClasses[position]);

      arrowNode.classList.add(_PopupArrow2.default.positionClasses[position]);
      popupNode.classList.add(_Popup2.default.positionClasses[position]);

      if (['top', 'bottom'].indexOf(position) >= 0) {
        arrowNode.style.left = PopupPresenter.leftOffset(targetBounds, popUpBounds, parsedAttachment.horizontal, _PopupArrow2.default.arrowSize);
      } else {
        arrowNode.style.top = PopupPresenter.topOffset(targetBounds, popUpBounds, _PopupArrow2.default.arrowSize);
      }
    }
  }, {
    key: 'primaryArrowPosition',
    value: function primaryArrowPosition(attachment) {
      var parsedAttachment = PopupPresenter.parseStringPosition(attachment);
      var isVerticalPosition = ['top', 'bottom'].indexOf(parsedAttachment.vertical) >= 0;
      return isVerticalPosition ? parsedAttachment.vertical : parsedAttachment.horizontal;
    }
  }]);

  function PopupPresenter(props) {
    _classCallCheck(this, PopupPresenter);

    var _this = _possibleConstructorReturn(this, (PopupPresenter.__proto__ || Object.getPrototypeOf(PopupPresenter)).call(this, props));

    _this.handleTetherRepositioned = _this.handleTetherRepositioned.bind(_this);
    _this.setArrowNode = _this.setArrowNode.bind(_this);
    _this.setPopupNode = _this.setPopupNode.bind(_this);
    return _this;
  }

  _createClass(PopupPresenter, [{
    key: 'handleTetherRepositioned',
    value: function handleTetherRepositioned(event, targetBounds, presenterBounds) {
      if (this._arrowNode && this._popupNode) {
        PopupPresenter.setArrowPosition(targetBounds, presenterBounds, this.props.contentAttachment, this._arrowNode, this._popupNode);
      }
    }
  }, {
    key: 'setArrowNode',
    value: function setArrowNode(node) {
      this._arrowNode = node;
    }
  }, {
    key: 'setPopupNode',
    value: function setPopupNode(node) {
      this._popupNode = node;
    }
  }, {
    key: 'createPopup',
    value: function createPopup(content, boundingFrame, attachment, arrow, onRequestClose, disableHeader, customProps) {
      var boundsProps = void 0;
      if (boundingFrame) {
        boundsProps = {
          contentMaxHeight: boundingFrame.clientHeight,
          contentMaxWidth: boundingFrame.clientWidth
        };
      } else {
        boundsProps = {
          contentMaxHeight: window.innerHeight,
          contentMaxWidth: window.innerWidth
        };
      }

      return _react2.default.createElement(_Popup2.default, _extends({}, customProps, boundsProps, {
        arrow: arrow,
        arrowPosition: PopupPresenter.primaryArrowPosition(attachment),
        content: content,
        closeOnEsc: true,
        closeOnOutsideClick: true,
        closeOnResize: true,
        disableHeader: disableHeader,
        isResponsive: true,
        onRequestClose: onRequestClose,
        refCallback: this.setPopupNode
      }));
    }
  }, {
    key: 'createPortalContent',
    value: function createPortalContent(tetherContent, boundingFrame, zIndex, useOverlay) {
      if (!useOverlay) {
        return tetherContent;
      }

      return _react2.default.createElement(
        _PopupOverlay2.default,
        { style: { zIndex: zIndex } },
        tetherContent
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          boundingRef = _props.boundingRef,
          content = _props.content,
          contentAttachment = _props.contentAttachment,
          disableHeader = _props.disableHeader,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          showArrow = _props.showArrow,
          targetRef = _props.targetRef,
          zIndex = _props.zIndex,
          customProps = _objectWithoutProperties(_props, ['boundingRef', 'content', 'contentAttachment', 'disableHeader', 'isOpen', 'onRequestClose', 'showArrow', 'targetRef', 'zIndex']); // eslint-disable-line no-unused-vars

      var boundingFrame = boundingRef ? boundingRef() : undefined;

      var popup = void 0;
      if (isOpen && content) {
        var arrow = void 0;
        if (showArrow) {
          arrow = _react2.default.createElement(_PopupArrow2.default, { refCallback: this.setArrowNode });
        }
        popup = this.createPopup(content, boundingFrame, contentAttachment, arrow, onRequestClose, disableHeader, customProps);
      }

      var allowScrolling = false;
      var constraints = [{
        to: boundingFrame || 'window',
        attachment: 'together',
        pin: true
      }];

      var tetherCotent = _react2.default.createElement(_TetherComponent2.default, {
        classPrefix: 'terra-PopupPresenter',
        constraints: constraints,
        content: popup,
        contentAttachment: contentAttachment,
        disableOnPosition: !allowScrolling,
        isEnabled: true,
        onRepositioned: this.handleTetherRepositioned,
        style: { zIndex: zIndex },
        targetRef: targetRef,
        targetAttachment: PopupPresenter.mirrorAttachment(contentAttachment)
      });

      return _react2.default.createElement(
        _reactPortal2.default,
        { isOpened: isOpen },
        this.createPortalContent(tetherCotent, boundingRef, zIndex, !allowScrolling)
      );
    }
  }]);

  return PopupPresenter;
}(_react2.default.Component);

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

exports.default = PopupPresenter;