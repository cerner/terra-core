'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

require('./ResponsiveExample.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResponsiveExample = function (_React$Component) {
  _inherits(ResponsiveExample, _React$Component);

  function ResponsiveExample() {
    _classCallCheck(this, ResponsiveExample);

    var _this = _possibleConstructorReturn(this, (ResponsiveExample.__proto__ || Object.getPrototypeOf(ResponsiveExample)).call(this));

    _this.state = { size: 'medium' };
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    return _this;
  }

  _createClass(ResponsiveExample, [{
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      this.setState({ size: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Container Size: '
        ),
        _react2.default.createElement(
          'select',
          { value: this.state.size, onChange: this.handleSelectChange },
          _react2.default.createElement(
            'option',
            { value: 'default' },
            'Default size'
          ),
          _react2.default.createElement(
            'option',
            { value: 'tiny' },
            'Tiny'
          ),
          _react2.default.createElement(
            'option',
            { value: 'small' },
            'Small'
          ),
          _react2.default.createElement(
            'option',
            { value: 'medium' },
            'Medium'
          ),
          _react2.default.createElement(
            'option',
            { value: 'large' },
            'Large'
          ),
          _react2.default.createElement(
            'option',
            { value: 'huge' },
            'Huge'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'terra-ResponsiveExample-container terra-ResponsiveExample-container--' + this.state.size },
          _react2.default.createElement(_terraResponsiveElement2.default, this.props)
        )
      );
    }
  }]);

  return ResponsiveExample;
}(_react2.default.Component);

exports.default = ResponsiveExample;