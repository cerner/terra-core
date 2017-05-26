'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _terraPropsTable = require('terra-props-table');

var _terraPropsTable2 = _interopRequireDefault(_terraPropsTable);

var _terraMarkdown = require('terra-markdown');

var _terraMarkdown2 = _interopRequireDefault(_terraMarkdown);

var _README = require('terra-form/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _Field = require('terra-form/docs/Field.md');

var _Field2 = _interopRequireDefault(_Field);

var _Fieldset = require('terra-form/docs/Fieldset.md');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _Input = require('terra-form/docs/Input.md');

var _Input2 = _interopRequireDefault(_Input);

var _package = require('terra-form/package.json');

var _Field3 = require('!raw-loader!terra-form/src/Field');

var _Field4 = _interopRequireDefault(_Field3);

var _Fieldset3 = require('!raw-loader!terra-form/src/Fieldset');

var _Fieldset4 = _interopRequireDefault(_Fieldset3);

var _Input3 = require('!raw-loader!terra-form/src/Input');

var _Input4 = _interopRequireDefault(_Input3);

var _ControlledInput = require('./docs/ControlledInput.md');

var _ControlledInput2 = _interopRequireDefault(_ControlledInput);

var _ControlledInput3 = require('./examples/ControlledInput');

var _ControlledInput4 = _interopRequireDefault(_ControlledInput3);

var _Field5 = require('./examples/Field');

var _Field6 = _interopRequireDefault(_Field5);

var _Fieldset5 = require('./examples/Fieldset');

var _Fieldset6 = _interopRequireDefault(_Fieldset5);

var _Input5 = require('./examples/Input');

var _Input6 = _interopRequireDefault(_Input5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Component Source
var scrollToComponent = function scrollToComponent(id) {
  document.querySelector(id).scrollIntoView();
};

// Example Files
/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

var FormsExamples = function FormsExamples() {
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
      'Components'
    ),
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButton2.default, { text: 'Field', variant: 'link', onClick: function onClick() {
          scrollToComponent('#field');
        } })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButton2.default, { text: 'Fieldset', variant: 'link', onClick: function onClick() {
          scrollToComponent('#field');
        } })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_terraButton2.default, { text: 'Input', variant: 'link', onClick: function onClick() {
          scrollToComponent('#input');
        } })
    ),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'field-docs', src: _Field2.default }),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'field-props', src: _Field4.default }),
    _react2.default.createElement(_Field6.default, null),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'fieldset-docs', src: _Fieldset2.default }),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'fieldset-props', src: _Fieldset4.default }),
    _react2.default.createElement(_Fieldset6.default, null),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'input-docs', src: _Input2.default }),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'input-props', src: _Input4.default }),
    _react2.default.createElement(_Input6.default, null),
    _react2.default.createElement(_terraMarkdown2.default, { id: 'controlled-example', src: _ControlledInput2.default }),
    _react2.default.createElement(_ControlledInput4.default, null)
  );
};

exports.default = FormsExamples;