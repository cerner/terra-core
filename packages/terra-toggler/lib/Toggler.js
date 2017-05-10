'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

require('terra-base/lib/baseStyles');

require('./Toggler.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Content in the body of the panel that will be expanded or collapsed
   **/
  children: _propTypes2.default.node,
  /**
   * Callback function after expanded and after collapsed.
   **/
  handleToggled: _react2.default.PropTypes.func,
  /**
   * Content in the ‘header’ section that acts as a trigger for the collapse/expand action
   **/
  header: _propTypes2.default.node.isRequired,
  /**
   * Animates expanding and collapsing
   **/
  isAnimated: _propTypes2.default.bool,
  /**
   * Expands or collapses content
   **/
  isOpened: _propTypes2.default.bool
};

var defaultProps = {
  children: null,
  handleToggled: null,
  header: null,
  isAnimated: true,
  isOpened: false
};

var Toggler = function (_React$Component) {
  _inherits(Toggler, _React$Component);

  function Toggler(props) {
    _classCallCheck(this, Toggler);

    var _this = _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).call(this, props));

    _this.state = {
      isOpened: props.isOpened
    };

    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }

  _createClass(Toggler, [{
    key: 'handleToggle',
    value: function handleToggle(event) {
      this.setState({ isOpened: !this.state.isOpened });
      if (this.props.handleToggled !== null) {
        this.props.handleToggled(event);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // Disable this rule because otherwise handleToggled get added to customProps and get applied to the article
      // It is used in above functions, just not part of this render
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          header = _props.header,
          isOpened = _props.isOpened,
          isAnimated = _props.isAnimated,
          children = _props.children,
          handleToggled = _props.handleToggled,
          customProps = _objectWithoutProperties(_props, ['header', 'isOpened', 'isAnimated', 'children', 'handleToggled']);

      var togglerClass = (0, _classnames2.default)(['terra-Toggler', { 'is-collapsed': !this.state.isOpened }, { 'is-expanded': this.state.isOpened }, { 'is-animated': isAnimated }, customProps.className]);

      var ariaHidden = this.state.isOpened ? null : 'true';
      var ariaExpanded = this.state.isOpened ? 'true' : 'false';

      return (
        // TODO: Links in header shouldn't trigger collapse
        _react2.default.createElement(
          'article',
          _extends({}, customProps, { className: togglerClass, role: 'tablist' }),
          _react2.default.createElement(
            _terraButton2.default,
            { size: 'small', variant: 'link', className: 'terra-Toggler-header', 'aria-expanded': ariaExpanded, onClick: this.handleToggle },
            header
          ),
          _react2.default.createElement(
            'div',
            { className: 'terra-Toggler-content', role: 'tabpanel', 'aria-hidden': ariaHidden },
            children
          )
        )
      );
    }
  }]);

  return Toggler;
}(_react2.default.Component);

Toggler.propTypes = propTypes;
Toggler.defaultProps = defaultProps;

exports.default = Toggler;