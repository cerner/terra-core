'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _README = require('terra-standout/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-standout/package.json');

require('terra-standout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */

var StandoutExamples = function StandoutExamples() {
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
    _react2.default.createElement(
      'h1',
      null,
      'Standout'
    ),
    _react2.default.createElement(
      'div',
      { className: 'terra-Standout' },
      _react2.default.createElement(
        'h2',
        null,
        'Heading'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.'
      )
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Standout Notice'
    ),
    _react2.default.createElement(
      'div',
      { className: 'terra-Standout terra-Standout--notice' },
      _react2.default.createElement(
        'h2',
        null,
        'Heading'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.'
      )
    )
  );
};

// eslint-disable-next-line import/extensions
// remove eslint-disable once terra-standout has been published
/* eslint-disable import/no-extraneous-dependencies */
exports.default = StandoutExamples;