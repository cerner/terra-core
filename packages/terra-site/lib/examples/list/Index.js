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

var _README = require('terra-list/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _package = require('terra-list/package.json');

var _ListItem = require('!raw-loader!terra-list/src/ListItem.jsx');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = require('!raw-loader!terra-list/src/List.jsx');

var _List2 = _interopRequireDefault(_List);

var _SingleSelectList = require('!raw-loader!terra-list/src/SingleSelectList.jsx');

var _SingleSelectList2 = _interopRequireDefault(_SingleSelectList);

var _MultiSelectList = require('!raw-loader!terra-list/src/MultiSelectList.jsx');

var _MultiSelectList2 = _interopRequireDefault(_MultiSelectList);

var _ListDemo = require('./ListDemo');

var _ListDemo2 = _interopRequireDefault(_ListDemo);

var _SingleSelect = require('./SingleSelect');

var _SingleSelect2 = _interopRequireDefault(_SingleSelect);

var _SingleSelectWithPreSelectedItem = require('./SingleSelectWithPreSelectedItem');

var _SingleSelectWithPreSelectedItem2 = _interopRequireDefault(_SingleSelectWithPreSelectedItem);

var _SingleSelectWithNonSelectableItem = require('./SingleSelectWithNonSelectableItem');

var _SingleSelectWithNonSelectableItem2 = _interopRequireDefault(_SingleSelectWithNonSelectableItem);

var _MultiSelect = require('./MultiSelect');

var _MultiSelect2 = _interopRequireDefault(_MultiSelect);

var _MultiSelectWithPreSelectedItem = require('./MultiSelectWithPreSelectedItem');

var _MultiSelectWithPreSelectedItem2 = _interopRequireDefault(_MultiSelectWithPreSelectedItem);

var _MultiSelectWithNonSelectableItem = require('./MultiSelectWithNonSelectableItem');

var _MultiSelectWithNonSelectableItem2 = _interopRequireDefault(_MultiSelectWithNonSelectableItem);

var _MultiSelectWithNoItemDeselect = require('./MultiSelectWithNoItemDeselect');

var _MultiSelectWithNoItemDeselect2 = _interopRequireDefault(_MultiSelectWithNoItemDeselect);

var _MultiSelectMaxSelection = require('./MultiSelectMaxSelection');

var _MultiSelectMaxSelection2 = _interopRequireDefault(_MultiSelectMaxSelection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListExamples = function ListExamples() {
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
      'h2',
      null,
      'List Item'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-listItem', src: _ListItem2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'List'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-list', src: _List2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Single Select List'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-singleList', src: _SingleSelectList2.default }),
    _react2.default.createElement(
      'h2',
      null,
      'Multiple Select List'
    ),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props-multiList', src: _MultiSelectList2.default }),
    _react2.default.createElement(
      'h2',
      { id: 'list' },
      'List'
    ),
    _react2.default.createElement(_ListDemo2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'single' },
      'Single Select List'
    ),
    _react2.default.createElement(_SingleSelect2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'single-pre-selected' },
      'Single Select List With Preselected Item'
    ),
    _react2.default.createElement(_SingleSelectWithPreSelectedItem2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'single-non-selectable' },
      'Single Select List With Item 3 Non-Selectable'
    ),
    _react2.default.createElement(_SingleSelectWithNonSelectableItem2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'multi' },
      'Multi Select List'
    ),
    _react2.default.createElement(_MultiSelect2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'multi-pre-selected' },
      'Multi Select List With Preselected Item'
    ),
    _react2.default.createElement(_MultiSelectWithPreSelectedItem2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'multi-non-selectable' },
      'Multi Select List With Item 3 Non-Selectable'
    ),
    _react2.default.createElement(_MultiSelectWithNonSelectableItem2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'multi-no-deselect' },
      'Multi Select List With Item 1 and 2 Selected but Cannot Deselect'
    ),
    _react2.default.createElement(_MultiSelectWithNoItemDeselect2.default, null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'h2',
      { id: 'multi-max-selection' },
      'Multi Select List With Maximum Selection of 2 Items'
    ),
    _react2.default.createElement(_MultiSelectMaxSelection2.default, null)
  );
};
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files


// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
exports.default = ListExamples;