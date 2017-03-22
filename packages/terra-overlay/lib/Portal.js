'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The <Portal/> component render its children into a div and append the div to a target DOM node.
 */
var propTypes = {
  /**
   * Whether or not the children of <Portal/> should be rendered
   */
  isOpen: _react.PropTypes.bool,
  /**
   * DOM element that will be appended with the new child by portal
   */
  target: _react.PropTypes.object
};

var defaultProps = {
  isOpen: false,
  target: document.body
};

var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.renderContent(this.props);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen) {
        this.renderContent(nextProps);
      } else if (this.props.isOpen && !nextProps.isOpen) {
        this.unrenderContent();
      }
    }
  }, {
    key: 'unrenderContent',
    value: function unrenderContent() {
      _reactDom2.default.unmountComponentAtNode(this.container);
      this.props.target.removeChild(this.container);
      this.container = null;
    }
  }, {
    key: 'renderContent',
    value: function renderContent(props) {
      if (!this.container) {
        this.container = document.createElement('div');
        props.target.appendChild(this.container);
      }
      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, props.children, this.container);
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