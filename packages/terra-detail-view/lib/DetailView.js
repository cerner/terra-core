'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DetailViewSubtitle = require('./DetailViewSubtitle');

var _DetailViewSubtitle2 = _interopRequireDefault(_DetailViewSubtitle);

require('./DetailView.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  /**
   * The title display for the view
   **/
  title: _react.PropTypes.element,

  /**
   * List of subtitle displays
   **/
  subtitles: _react.PropTypes.arrayOf(_react.PropTypes.element),

  /**
   * Display for visualization data
   **/
  graph: _react.PropTypes.element,

  /**
   * Array of elements to display detail information
   **/
  details: _react.PropTypes.arrayOf(_react.PropTypes.element),

  /**
   * Text to be displayed at the footer of the view
   **/
  footer: _react.PropTypes.string,

  /**
   * Indicates if sections should be devided
   **/
  isDivided: _react.PropTypes.bool
};

var defaultProps = {
  subtitles: [],
  details: [],
  isDivided: true
};

var DetailView = function DetailView(_ref) {
  var title = _ref.title,
      subtitles = _ref.subtitles,
      graph = _ref.graph,
      details = _ref.details,
      footer = _ref.footer,
      isDivided = _ref.isDivided,
      customProps = _objectWithoutProperties(_ref, ['title', 'subtitles', 'graph', 'details', 'footer', 'isDivided']);

  var attributes = _extends({}, customProps);
  attributes.className = (0, _classnames2.default)(['terra-DetailView', attributes.className]);

  var divider = null;
  var dividedDetails = [];

  if (isDivided) {
    divider = _react2.default.createElement('hr', { className: 'terra-DetailView-divider' });

    for (var i = 0; i < details.length; i += 1) {
      dividedDetails.push(details[i]);
      dividedDetails.push(divider);
    }
  } else {
    dividedDetails = details;
  }

  return _react2.default.createElement(
    'div',
    attributes,
    _react2.default.createElement(
      'div',
      { className: 'terra-DetailView-title' },
      _react2.default.createElement(
        'div',
        { className: 'terra-DetailView-primaryText' },
        title
      ),
      subtitles
    ),
    divider,
    graph,
    divider,
    dividedDetails,
    _react2.default.createElement(
      'div',
      { className: 'terra-DetailView-footerText' },
      footer
    )
  );
};

DetailView.propTypes = propTypes;

DetailView.defaultProps = defaultProps;

DetailView.Subtitle = _DetailViewSubtitle2.default;

exports.default = DetailView;