'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  target: _react.PropTypes.element.isRequired,
  targetAttachment: _react.PropTypes.oneOf(_TetherComponent2.default.attachmentPositions),
  targetOffset: _react.PropTypes.string
};

var defaultProps = {
  isOpen: false
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
          customProps = _objectWithoutProperties(_props, ['className', 'closeOnEsc', 'closeOnOutsideClick', 'constraints', 'content', 'contentAttachment', 'contentOffset', 'isOpen', 'onRequestClose', 'target', 'targetAttachment', 'targetOffset', 'arrowAlignment', 'arrowPosition']); // eslint-disable-line no-unused-vars

      var wrappedContent = void 0;
      if (isOpen && content) {
        var frameProps = {
          className: className,
          closeOnEsc: closeOnEsc,
          closeOnOutsideClick: closeOnOutsideClick,
          onRequestClose: onRequestClose,
          arrowAlignment: PopupPresenter.arrowAlignmentFromAttachment(contentAttachment),
          arrowPosition: PopupPresenter.arrowPositionFromAttachment(contentAttachment),
          showArrow: contentAttachment !== 'middle center'
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
      var startAttachments = ['top left', 'bottom left'];
      var centerAttachments = ['top center', 'bottom center', 'middle left', 'middle right'];
      var endAttachments = ['top right', 'bottom right'];

      if (startAttachments.indexOf(contentAttachment) >= 0) {
        return 'Start';
      }
      if (centerAttachments.indexOf(contentAttachment) >= 0) {
        return 'Center';
      }
      if (endAttachments.indexOf(contentAttachment) >= 0) {
        return 'End';
      }
      return undefined;
    }
  }, {
    key: 'arrowPositionFromAttachment',
    value: function arrowPositionFromAttachment(contentAttachment) {
      var topAttachments = ['top left', 'top center', 'top right'];
      var startAttachments = ['middle left'];
      var endAttachments = ['middle right'];
      var bottomAttachments = ['bottom left', 'bottom center', 'bottom right'];

      if (topAttachments.indexOf(contentAttachment) >= 0) {
        return 'Top';
      }
      if (startAttachments.indexOf(contentAttachment) >= 0) {
        return 'Start';
      }
      if (endAttachments.indexOf(contentAttachment) >= 0) {
        return 'End';
      }
      if (bottomAttachments.indexOf(contentAttachment) >= 0) {
        return 'Bottom';
      }
      return undefined;
    }
  }]);

  return PopupPresenter;
}(_react2.default.Component);

PopupPresenter.propTypes = propTypes;
PopupPresenter.defaultProps = defaultProps;

exports.default = PopupPresenter;