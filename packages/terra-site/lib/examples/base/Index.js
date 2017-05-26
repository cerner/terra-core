'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraPropsTable = require('terra-props-table');

var _terraPropsTable2 = _interopRequireDefault(_terraPropsTable);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _README = require('terra-base/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-base/package.json');

var _Base = require('!raw-loader!terra-base/src/Base');

var _Base2 = _interopRequireDefault(_Base);

var _terraBase = require('terra-base');

var _terraBase2 = _interopRequireDefault(_terraBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
var BaseExamples = function BaseExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { id: 'version' },
      'Version: ',
      _package.version
    ),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'readme', src: _README2.default }),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _Base2.default }),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _terraBase2.default,
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Heading'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        ),
        _react2.default.createElement('img', { src: 'https://placeholdit.imgix.net/~text?txtsize=20&txt=200%C3%97200&w=200&h=200', alt: 'Placeholder' }),
        _react2.default.createElement(
          'dl',
          null,
          _react2.default.createElement(
            'dt',
            null,
            'Description name'
          ),
          _react2.default.createElement(
            'dd',
            null,
            'Description value'
          ),
          _react2.default.createElement(
            'dt',
            null,
            'Description name'
          ),
          _react2.default.createElement(
            'dd',
            null,
            'Description value'
          )
        ),
        _react2.default.createElement(
          'ol',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Ordered list item'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Ordered list item',
            _react2.default.createElement(
              'ol',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Nested ordered list item'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            'Ordered list item'
          )
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Unordered list item'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Unordered list item',
            _react2.default.createElement(
              'ol',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Nested unordered list item'
              )
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            'Unordered list item'
          )
        )
      )
    )
  );
};

// Example Files
/* eslint-disable import/no-extraneous-dependencies */
exports.default = BaseExamples;