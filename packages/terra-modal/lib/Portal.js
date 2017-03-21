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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The <Portal/> component render its children into a div and append the div to <body/>.
 */
var propTypes = {
  /**
   * Whether or not the children of <Portal/> should be rendered
   */
  isOpen: _react.PropTypes.bool
};

var defaultProps = {
  isOpen: false
};

var Portal = function (_React$Component) {
  (0, _inherits3.default)(Portal, _React$Component);

  function Portal() {
    (0, _classCallCheck3.default)(this, Portal);
    return (0, _possibleConstructorReturn3.default)(this, (Portal.__proto__ || (0, _getPrototypeOf2.default)(Portal)).apply(this, arguments));
  }

  (0, _createClass3.default)(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.renderContent(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.isOpen && nextProps.isOpen) {
        this.renderContent(nextProps);
      } else if (this.props.isOpen && !nextProps.isOpen) {
        this.unrenderContent();
      } else if (this.props.isOpen && nextProps.isOpen) {
        this.unrenderContent();
        this.renderContent(nextProps);
      }
    }
  }, {
    key: 'unrenderContent',
    value: function unrenderContent() {
      document.body.removeChild(this.container);
    }
  }, {
    key: 'renderContent',
    value: function renderContent(props) {
      this.container = document.createElement('div');
      document.body.appendChild(this.container);
      _reactDom2.default.render(props.children, this.container);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Portal;
}(_react2.default.Component);

Portal.propTypes = propTypes;
Portal.defaultProps = defaultProps;

exports.default = Portal;