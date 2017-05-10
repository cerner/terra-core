'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  constraints: _react.PropTypes.array,
  content: _react.PropTypes.element,
  contentAttachment: _react.PropTypes.oneOf(_TetherComponent2.default.attachmentPositions).isRequired,
  contentOffset: _react.PropTypes.string,
  isOpen: _react.PropTypes.bool,
  onRequestClose: _react.PropTypes.func,
  showArrow: _react.PropTypes.bool,
  target: _react.PropTypes.element.isRequired,
  targetAttachment: _react.PropTypes.oneOf(_TetherComponent2.default.attachmentPositions),
  targetOffset: _react.PropTypes.string
};

var defaultProps = {
  isOpen: false,
  showArrow: false
};

var WrappedPopupFrame = (0, _reactOnclickoutside2.default)(_PopupFrame2.default);

var PopupPresenter = function (_React$Component) {
  _inherits(PopupPresenter, _React$Component);

  function PopupPresenter() {
    _classCallCheck(this, PopupPresenter);

    return _possibleConstructorReturn(this, (PopupPresenter.__proto__ || Object.getPrototypeOf(PopupPresenter)).apply(this, arguments));
  }

  _createClass(PopupPresenter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          closeOnEsc = _props.closeOnEsc,
          closeOnOutsideClick = _props.closeOnOutsideClick,
          constraints = _props.constraints,
          content = _props.content,
          contentAttachment = _props.contentAttachment,
          contentOffset = _props.contentOffset,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          target = _props.target,
          targetAttachment = _props.targetAttachment,
          targetOffset = _props.targetOffset,
          arrowAlignment = _props.arrowAlignment,
          arrowPosition = _props.arrowPosition,
          showArrow = _props.showArrow,
          customProps = _objectWithoutProperties(_props, ['className', 'closeOnEsc', 'closeOnOutsideClick', 'constraints', 'content', 'contentAttachment', 'contentOffset', 'isOpen', 'onRequestClose', 'target', 'targetAttachment', 'targetOffset', 'arrowAlignment', 'arrowPosition', 'showArrow']); // eslint-disable-line no-unused-vars

      var wrappedContent = void 0;
      if (isOpen && content) {
        var _arrowAlignment = PopupPresenter.arrowPositionFromAttachment(contentAttachment);
        var _arrowPosition = PopupPresenter.arrowAlignmentFromAttachment(contentAttachment);
        var arrowPxOffset = PopupPresenter.calculateArrowOffest(_arrowPosition, contentOffset, targetOffset);
        var frameProps = {
          className: className,
          closeOnEsc: closeOnEsc,
          closeOnOutsideClick: closeOnOutsideClick,
          onRequestClose: onRequestClose,
          arrowAlignment: _arrowAlignment,
          arrowPosition: _arrowPosition,
          showArrow: PopupPresenter.shouldDisplayArrow(showArraow, contentAttachment),
          arrowPxOffset: arrowPxOffset
        };

        wrappedContent = _react2.default.createElement(
          WrappedPopupFrame,
          frameProps,
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
        tetherOptions.offset = contentOffset;
      }
      if (targetOffset) {
        tetherOptions.targetOffset = targetOffset;
      }
      if (targetAttachment) {
        tetherOptions.targetAttachment = targetAttachment;
      }

      return _react2.default.createElement(_TetherComponent2.default, tetherOptions);
    }
  }], [{
    key: 'arrowAlignmentFromAttachment',
    value: function arrowAlignmentFromAttachment(contentAttachment) {
      var parsedValue = PopupPresenter.parseStringPosition(value);

      if (parsedValue.vertical === 'middle' || parsedValue.horizontal === 'center') {
        return 'Center';
      } else if (parsedValue.horizontal === 'left') {
        return 'Start';
      } else {
        return 'End';
      }
    }
  }, {
    key: 'arrowPositionFromAttachment',
    value: function arrowPositionFromAttachment(contentAttachment) {
      var parsedValue = PopupPresenter.parseStringPosition(value);

      if (parsedValue.vertical === 'top') {
        return 'Top';
      } else if (parsedValue.vertical === 'middle') {
        if (parsedValue.horizontal === 'left') {
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
      if (showArrow === true && contentAttachment !== 'middle center') {
        return false;
      }
      return showArrow;
    }
  }, {
    key: 'calculateArrowOffest',
    value: function calculateArrowOffest(position, contentOffset, targetOffset) {
      var parsedContentValue = PopupPresenter.parseOffset(contentOffset); // {verticalPx, horizontalPx}
      var parsedTargetValue = PopupPresenter.parseOffset(targetOffset); // {verticalPx, horizontalPx}

      if (['top', 'bottom'].indexOf(position) >= 0) {
        return parsedContentValue.horizontal + parsedTargetValue.horizontal;
      }
      return parsedContentValue.vertical + parsedTargetValue.vertical;
    }
  }]);

  return PopupPresenter;
}(_react2.default.Component);

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

exports.default = PopupPresenter;