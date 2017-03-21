'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconClose = require('terra-icon/lib/icon/IconClose');

var _IconClose2 = _interopRequireDefault(_IconClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The <Dialog/> component contains the information in a modal, including header/body/footer.
 * It supports scrolling of body content and fixed footer at the bottom if the body overflows.
 * It supports full-screen dialog and sizes with max-width at different breakpoints.
 */
var propTypes = {
  /**
   * Set aria-label for modal dialog
   */
  ariaLabel: _react.PropTypes.string.isRequired,
  /**
   * Set modal dialog to full screen
   */
  isFullScreen: _react.PropTypes.bool,
  /**
   * Set the max-width for modal dialog
   */
  size: _react.PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  /**
   * Set the height of modal dialog in px, max-height = windows.height * 85
   */
  height: _react.PropTypes.number,
  /**
   * Callback function for closing the modal
   */
  onRequestClose: _react.PropTypes.func.isRequired,
  /**
   * Displays close button on the top right(ltr) of container
   */
  hasCloseButton: _react.PropTypes.bool,
  /**
   * Modal header
   */
  header: _react.PropTypes.element,
  /**
  * Modal body
  */
  body: _react.PropTypes.element,
  /**
  * Modal footer
  */
  footer: _react.PropTypes.element
};

var defaultProps = {
  isFullScreen: false,
  size: 'medium',
  hasCloseButton: true
};

var Dialog = function (_React$Component) {
  (0, _inherits3.default)(Dialog, _React$Component);

  function Dialog() {
    (0, _classCallCheck3.default)(this, Dialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this));

    _this.state = {};
    _this.updateBodyHeight = _this.updateBodyHeight.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Dialog, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateBodyHeight();
      window.addEventListener('resize', this.updateBodyHeight);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateBodyHeight);
    }
  }, {
    key: 'updateBodyHeight',
    value: function updateBodyHeight() {
      var headerHeight = this.dialog.firstElementChild.offsetHeight;
      var footerHeight = this.dialog.lastElementChild.offsetHeight;
      var headerfooter = headerHeight + footerHeight;
      if (this.props.isFullScreen) {
        this.setState({
          bodyHeight: window.innerHeight - headerfooter,
          bodyMaxHeight: undefined
        });
      } else if (this.props.height) {
        var height = Math.min(this.props.height - headerfooter, window.innerHeight * 0.85 - headerfooter);
        this.setState({
          bodyHeight: height,
          bodyMaxHeight: undefined
        });
      } else {
        this.setState({
          bodyMaxHeight: window.innerHeight * 0.85 - headerfooter,
          bodyHeight: undefined
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var bodyStyle = {
        maxHeight: this.state.bodyMaxHeight,
        height: this.state.bodyHeight
      };
      var dialogClass = (0, _classnames2.default)('terra-Modal-dialog', 'terra-Modal--' + this.props.size, { 'terra-Modal--fullScreen': this.props.isFullScreen });
      return _react2.default.createElement(
        'div',
        {
          role: 'dialog',
          tabIndex: -1,
          'aria-label': this.props.ariaLabel,
          className: dialogClass,
          ref: function ref(dialog) {
            _this2.dialog = dialog;
          }
        },
        _react2.default.createElement(
          'div',
          { className: 'terra-Modal-header' },
          _react2.default.createElement(
            'div',
            null,
            this.props.header
          ),
          this.props.hasCloseButton && _react2.default.createElement(_terraButton2.default, {
            'aria-label': 'modal-close',
            title: 'modal-close',
            className: 'terra-Modal--close',
            icon: _react2.default.createElement(_IconClose2.default, null),
            onClick: this.props.onRequestClose
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'terra-Modal-body', style: bodyStyle },
          this.props.body
        ),
        _react2.default.createElement(
          'div',
          null,
          this.props.footer
        )
      );
    }
  }]);
  return Dialog;
}(_react2.default.Component);

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

exports.default = Dialog;