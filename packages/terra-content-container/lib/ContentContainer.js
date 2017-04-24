'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('terra-base/lib/baseStyles');

require('./ContentContainer.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The header element to be placed within the header area of the container.
   */
  header: _react.PropTypes.node,
  /**
   * The children to be placed within the main content area of the container.
   */
  children: _react.PropTypes.node,
  /**
   * Whether or not the container should expanded to fill its parent element.
   */
  fill: _react.PropTypes.bool
};

var defaultProps = {
  header: undefined,
  children: undefined,
  fill: false
};

var ContentContainer = function ContentContainer(_ref) {
  var header = _ref.header,
      children = _ref.children,
      fill = _ref.fill,
      customProps = _objectWithoutProperties(_ref, ['header', 'children', 'fill']);

  var contentLayoutClassNames = (0, _classnames2.default)(['terra-ContentContainer', { 'terra-ContentContainer--fill': fill }, customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, { className: contentLayoutClassNames }),
    _react2.default.createElement(
      'div',
      { className: 'terra-ContentContainer-header' },
      header
    ),
    _react2.default.createElement(
      'div',
      { className: 'terra-ContentContainer-main' },
      _react2.default.createElement(
        'div',
        { className: 'terra-ContentContainer-main-normalizer' },
        children
      )
    )
  );
};

ContentContainer.propTypes = propTypes;
ContentContainer.defaultProps = defaultProps;

exports.default = ContentContainer;