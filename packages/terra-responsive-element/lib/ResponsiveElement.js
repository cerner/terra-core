'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

require('terra-base/lib/baseStyles');

var _breakpoints = require('./breakpoints');

var _breakpoints2 = _interopRequireDefault(_breakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * An element to be displayed at default breakpoints ( Between 0 and tiny )
  */
  defaultElement: _react.PropTypes.element,
  /**
   * An element to be displayed at tiny breakpoints
   */
  tiny: _react.PropTypes.element,
  /**
   * An element to be displayed at small breakpoints
   */
  small: _react.PropTypes.element,
  /**
   * An element to be displayed at medium breakpoints
   */
  medium: _react.PropTypes.element,
  /**
   * An element to be displayed at large breakpoints
   */
  large: _react.PropTypes.element,
  /**
   * An element to be displayed at huge breakpoints
   */
  huge: _react.PropTypes.element,
  /**
   * The viewport the element will be responsive to, one of `window` or `parent`
   */
  responsiveTo: _react.PropTypes.oneOf(['window', 'parent'])
};

var defaultProps = {
  responsiveTo: 'parent'
};

var ResponsiveElement = function (_React$Component) {
  _inherits(ResponsiveElement, _React$Component);

  function ResponsiveElement() {
    _classCallCheck(this, ResponsiveElement);

    var _this = _possibleConstructorReturn(this, (ResponsiveElement.__proto__ || Object.getPrototypeOf(ResponsiveElement)).call(this));

    _this.state = { element: null };
    _this.setContainer = _this.setContainer.bind(_this);
    _this.handleResize = _this.handleResize.bind(_this);
    _this.handleWindowResize = _this.handleWindowResize.bind(_this);
    return _this;
  }

  _createClass(ResponsiveElement, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.container) {
        this.resizeObserver = new _resizeObserverPolyfill2.default(function (entries) {
          _this2.handleResize(entries[0].contentRect.width);
        });
        this.resizeObserver.observe(this.container);
      } else {
        this.handleResize(window.innerWidth);
        window.addEventListener('resize', this.handleWindowResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.container) {
        this.resizeObserver.disconnect(this.container);
        this.container = null;
      } else {
        window.removeEventListener('resize', this.handleWindowResize);
      }
    }
  }, {
    key: 'setContainer',
    value: function setContainer(node) {
      if (node === null) {
        return;
      } // Ref callbacks happen on mount and unmount, element will be null on unmount
      this.container = this.props.responsiveTo === 'parent' ? node.parentNode : null;
    }
  }, {
    key: 'handleResize',
    value: function handleResize(width) {
      var element = void 0;

      var _getBreakpoints = (0, _breakpoints2.default)(),
          tiny = _getBreakpoints.tiny,
          small = _getBreakpoints.small,
          medium = _getBreakpoints.medium,
          large = _getBreakpoints.large,
          huge = _getBreakpoints.huge;

      if (width >= huge && this.props.huge) {
        element = 'huge';
      } else if (width >= large && this.props.large) {
        element = 'large';
      } else if (width >= medium && this.props.medium) {
        element = 'medium';
      } else if (width >= small && this.props.small) {
        element = 'small';
      } else if (width >= tiny && this.props.tiny) {
        element = 'tiny';
      } else {
        element = 'defaultElement';
      }

      if (this.state.element !== element) {
        this.setState({ element: element });
      }
    }
  }, {
    key: 'handleWindowResize',
    value: function handleWindowResize() {
      this.handleResize(window.innerWidth);
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _props = this.props,
          defaultElement = _props.defaultElement,
          tiny = _props.tiny,
          small = _props.small,
          medium = _props.medium,
          large = _props.large,
          huge = _props.huge,
          responsiveTo = _props.responsiveTo,
          customProps = _objectWithoutProperties(_props, ['defaultElement', 'tiny', 'small', 'medium', 'large', 'huge', 'responsiveTo']);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { ref: this.setContainer }),
        this.props[this.state.element]
      );
    }
  }]);

  return ResponsiveElement;
}(_react2.default.Component);

ResponsiveElement.propTypes = propTypes;
ResponsiveElement.defaultProps = defaultProps;

exports.default = ResponsiveElement;