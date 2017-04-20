'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

require('terra-base/lib/baseStyles');

require('github-markdown-css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Markdown content to parse
   */
  src: _react.PropTypes.string
};
// eslint-disable-next-line import/extensions


var defaultProps = {
  src: ''
};

/* eslint react/no-danger:0 */
var Markdown = function Markdown(props) {
  return _react2.default.createElement('div', {
    dir: 'ltr',
    className: 'markdown-body',
    style: { listStyle: 'initial' },
    dangerouslySetInnerHTML: { __html: (0, _marked2.default)(props.src) }
  });
};

Markdown.propTypes = propTypes;
Markdown.defaultProps = defaultProps;

exports.default = Markdown;