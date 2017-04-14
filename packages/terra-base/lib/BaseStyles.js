'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Base.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The component(s) that will be wrapped by `<Base />`.
   */
  children: _react.PropTypes.node.isRequired
};

var BaseStyles = function (_React$Component) {
  _inherits(BaseStyles, _React$Component);

  function BaseStyles() {
    _classCallCheck(this, BaseStyles);

    return _possibleConstructorReturn(this, (BaseStyles.__proto__ || Object.getPrototypeOf(BaseStyles)).apply(this, arguments));
  }

  _createClass(BaseStyles, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Checks to run when not in production
      if (process.env.NODE_ENV !== 'production') {
        // Check to ensure terra-Base class is set on html element
        if (!new RegExp('(^|\\s)terra-Base(\\s|$)').test(document.documentElement.className)) {
          // eslint-disable-next-line
          console.warn('The html element is missing the terra-Base class.');
        }

        // Check to ensure dir attribute is set on html element
        if (!document.documentElement.hasAttribute('dir')) {
          // eslint-disable-next-line
          console.warn('The html element is missing the dir attribute. For terra directionality based styles to render correctly, add dir="ltr" or dir="rtl" to the html element.');
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          customProps = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        'div',
        customProps,
        children
      );
    }
  }]);

  return BaseStyles;
}(_react2.default.Component);

BaseStyles.propTypes = propTypes;

exports.default = BaseStyles;