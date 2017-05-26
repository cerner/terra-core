'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraModal = require('terra-modal');

var _terraModal2 = _interopRequireDefault(_terraModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalCloseOnOutsideClick = function (_React$Component) {
  _inherits(ModalCloseOnOutsideClick, _React$Component);

  function ModalCloseOnOutsideClick() {
    _classCallCheck(this, ModalCloseOnOutsideClick);

    var _this = _possibleConstructorReturn(this, (ModalCloseOnOutsideClick.__proto__ || Object.getPrototypeOf(ModalCloseOnOutsideClick)).call(this));

    _this.state = {
      isOpened: false
    };

    _this.handleOpenModal = _this.handleOpenModal.bind(_this);
    _this.handleCloseModal = _this.handleCloseModal.bind(_this);
    return _this;
  }

  _createClass(ModalCloseOnOutsideClick, [{
    key: 'handleOpenModal',
    value: function handleOpenModal() {
      this.setState({ isOpened: true });
    }
  }, {
    key: 'handleCloseModal',
    value: function handleCloseModal() {
      this.setState({ isOpened: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _terraModal2.default,
          {
            ariaLabel: 'Modal disable close on outside click',
            isOpened: this.state.isOpened,
            closeOnOutsideClick: false,
            onRequestClose: this.handleCloseModal
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h1',
              null,
              'Modal disable close on outside click'
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'p',
              null,
              'You can close the modal by:'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                '- Pressing the ESC key'
              ),
              _react2.default.createElement(
                'li',
                null,
                '- Clicking on the close button'
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'button',
              { onClick: this.handleCloseModal },
              'Close Modal'
            )
          )
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleOpenModal },
          'Open Modal'
        )
      );
    }
  }]);

  return ModalCloseOnOutsideClick;
}(_react2.default.Component);

exports.default = ModalCloseOnOutsideClick;