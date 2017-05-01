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

require('./SlidePanel.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The component to display in the main content area.
   */
  mainContent: _react.PropTypes.node,

  /**
   * The component to display in the panel content area.
   */
  panelContent: _react.PropTypes.node,

  /**
   * The style of panel presentation. One of `overlay`, `squish`.
   */
  panelBehavior: _react.PropTypes.oneOf(['overlay', 'squish']),

  /**
   * The position at which the panel will be displayed. This property honors the current direction setting. One of `start`, `end`.
   */
  panelPosition: _react.PropTypes.oneOf(['start', 'end']),

  /**
   * The size at which the panel will be displayed. One of `small`, `large`.
   */
  panelSize: _react.PropTypes.oneOf(['small', 'large']),

  /**
   * Whether or not, when open, the panel should be displayed with the full width of the SlidePanel.
   */
  isFullscreen: _react.PropTypes.bool,

  /**
   * Whether or not the panel should be displayed.
   */
  isOpen: _react.PropTypes.bool,

  /**
   * Whether or not the SlidePanel should be sized relative to its parent container.
   */
  fill: _react.PropTypes.bool
};

var defaultProps = {
  panelBehavior: 'overlay',
  panelPosition: 'end',
  panelSize: 'small'
};

var SlidePanel = function SlidePanel(_ref) {
  var mainContent = _ref.mainContent,
      panelContent = _ref.panelContent,
      panelBehavior = _ref.panelBehavior,
      panelPosition = _ref.panelPosition,
      panelSize = _ref.panelSize,
      isFullscreen = _ref.isFullscreen,
      isOpen = _ref.isOpen,
      fill = _ref.fill,
      customProps = _objectWithoutProperties(_ref, ['mainContent', 'panelContent', 'panelBehavior', 'panelPosition', 'panelSize', 'isFullscreen', 'isOpen', 'fill']);

  var slidePanelClassNames = (0, _classnames2.default)(['terra-SlidePanel', { 'terra-SlidePanel--is-open': isOpen }, { 'terra-SlidePanel--is-fullscreen': isFullscreen }, { 'terra-SlidePanel--fill': fill }, customProps.className]);

  return _react2.default.createElement(
    'div',
    _extends({}, customProps, {
      className: slidePanelClassNames,
      'data-slide-panel-panel-behavior': panelBehavior,
      'data-slide-panel-panel-position': panelPosition,
      'data-slide-panel-panel-size': panelSize
    }),
    _react2.default.createElement(
      'div',
      { className: 'terra-SlidePanel-panel', 'aria-hidden': !isOpen ? 'true' : null },
      panelContent
    ),
    _react2.default.createElement(
      'div',
      { className: 'terra-SlidePanel-main' },
      mainContent
    )
  );
};

SlidePanel.propTypes = propTypes;
SlidePanel.defaultProps = defaultProps;

exports.default = SlidePanel;