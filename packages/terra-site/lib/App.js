'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

var _terraGrid = require('terra-grid');

var _terraGrid2 = _interopRequireDefault(_terraGrid);

var _terraList = require('terra-list');

var _terraList2 = _interopRequireDefault(_terraList);

require('./site.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var propTypes = {
  children: _propTypes2.default.node
};

var App = function App(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _terraGrid2.default,
      null,
      _react2.default.createElement(
        _terraGrid2.default.Row,
        null,
        _react2.default.createElement(
          _terraGrid2.default.Column,
          { small: 2 },
          _react2.default.createElement(
            'div',
            { dir: 'ltr' },
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
                } },
              'ltr'
            ),
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
                } },
              'rtl'
            )
          ),
          _react2.default.createElement(
            _terraList2.default,
            { className: 'site-nav' },
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/' },
                'Home'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/arrange' },
                'Arrange'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/base' },
                'Base'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/badge' },
                'Badge'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/button' },
                'Button'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/button-group' },
                'Button Group'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/content' },
                'Content'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/content-container' },
                'Content Container'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/datepicker' },
                'Date Picker'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/demographics-banner' },
                'Demographics Banner'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/form' },
                'Form'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/grid' },
                'Grid'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/i18n' },
                'I18n'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/icon' },
                'Icon'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/image' },
                'Image'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/list' },
                'List'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/modal' },
                'Modal'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/progress-bar' },
                'Progress Bar'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/responsive-element' },
                'Responsive Element'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/slide-panel' },
                'Slide Panel'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/standout' },
                'Standout'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/status' },
                'Status'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/table' },
                'Table'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/site/title' },
                'Title'
              ) }),
            _react2.default.createElement(_terraList2.default.Item, { content: _react2.default.createElement(
                _reactRouter.Link,
                { to: '/tests' },
                'Tests'
              ) })
          )
        ),
        _react2.default.createElement(
          _terraGrid2.default.Column,
          { small: 10 },
          props.children
        )
      )
    )
  );
};

App.propTypes = propTypes;

exports.default = App;