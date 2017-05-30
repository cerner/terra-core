'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Index = require('./examples/arrange/Index');

var _Index2 = _interopRequireDefault(_Index);

var _Index3 = require('./examples/badge/Index');

var _Index4 = _interopRequireDefault(_Index3);

var _Index5 = require('./examples/base/Index');

var _Index6 = _interopRequireDefault(_Index5);

var _Index7 = require('./examples/button/Index');

var _Index8 = _interopRequireDefault(_Index7);

var _Index9 = require('./examples/button-group/Index');

var _Index10 = _interopRequireDefault(_Index9);

var _Index11 = require('./examples/content/Index');

var _Index12 = _interopRequireDefault(_Index11);

var _Index13 = require('./examples/content-container/Index');

var _Index14 = _interopRequireDefault(_Index13);

var _Index15 = require('./examples/date-picker/Index');

var _Index16 = _interopRequireDefault(_Index15);

var _Index17 = require('./examples/demographics-banner/Index');

var _Index18 = _interopRequireDefault(_Index17);

var _Index19 = require('./examples/form/Index');

var _Index20 = _interopRequireDefault(_Index19);

var _Index21 = require('./examples/grid/Index');

var _Index22 = _interopRequireDefault(_Index21);

var _Index23 = require('./examples/i18n/Index');

var _Index24 = _interopRequireDefault(_Index23);

var _Index25 = require('./examples/icon/Index');

var _Index26 = _interopRequireDefault(_Index25);

var _Index27 = require('./examples/image/Index');

var _Index28 = _interopRequireDefault(_Index27);

var _Index29 = require('./examples/list/Index');

var _Index30 = _interopRequireDefault(_Index29);

var _Index31 = require('./examples/modal/Index');

var _Index32 = _interopRequireDefault(_Index31);

var _Index33 = require('./examples/progress-bar/Index');

var _Index34 = _interopRequireDefault(_Index33);

var _Index35 = require('./examples/responsive-element/Index');

var _Index36 = _interopRequireDefault(_Index35);

var _Index37 = require('./examples/slide-panel/Index');

var _Index38 = _interopRequireDefault(_Index37);

var _Index39 = require('./examples/standout/Index');

var _Index40 = _interopRequireDefault(_Index39);

var _Index41 = require('./examples/status/Index');

var _Index42 = _interopRequireDefault(_Index41);

var _Index43 = require('./examples/table/Index');

var _Index44 = _interopRequireDefault(_Index43);

var _Index45 = require('./examples/title/Index');

var _Index46 = _interopRequireDefault(_Index45);

var _ArrangeTestRoutes = require('terra-arrange/tests/nightwatch/ArrangeTestRoutes');

var _ArrangeTestRoutes2 = _interopRequireDefault(_ArrangeTestRoutes);

var _BadgeTestRoutes = require('terra-badge/tests/nightwatch/BadgeTestRoutes');

var _BadgeTestRoutes2 = _interopRequireDefault(_BadgeTestRoutes);

var _BaseTestRoutes = require('terra-base/tests/nightwatch/BaseTestRoutes');

var _BaseTestRoutes2 = _interopRequireDefault(_BaseTestRoutes);

var _ButtonTestRoutes = require('terra-button/tests/nightwatch/ButtonTestRoutes');

var _ButtonTestRoutes2 = _interopRequireDefault(_ButtonTestRoutes);

var _ButtonGroupTestRoutes = require('terra-button-group/tests/nightwatch/ButtonGroupTestRoutes');

var _ButtonGroupTestRoutes2 = _interopRequireDefault(_ButtonGroupTestRoutes);

var _ContentContainerTestRoutes = require('terra-content-container/tests/nightwatch/ContentContainerTestRoutes');

var _ContentContainerTestRoutes2 = _interopRequireDefault(_ContentContainerTestRoutes);

var _DatePickerTestRoutes = require('terra-date-picker/tests/nightwatch/DatePickerTestRoutes');

var _DatePickerTestRoutes2 = _interopRequireDefault(_DatePickerTestRoutes);

var _DemographicsBannerTestRoutes = require('terra-demographics-banner/tests/nightwatch/DemographicsBannerTestRoutes');

var _DemographicsBannerTestRoutes2 = _interopRequireDefault(_DemographicsBannerTestRoutes);

var _I18nTestRoutes = require('terra-i18n/tests/nightwatch/I18nTestRoutes');

var _I18nTestRoutes2 = _interopRequireDefault(_I18nTestRoutes);

var _ImageTestRoutes = require('terra-image/tests/nightwatch/ImageTestRoutes');

var _ImageTestRoutes2 = _interopRequireDefault(_ImageTestRoutes);

var _ResponsiveElementTestRoutes = require('terra-responsive-element/tests/nightwatch/ResponsiveElementTestRoutes');

var _ResponsiveElementTestRoutes2 = _interopRequireDefault(_ResponsiveElementTestRoutes);

var _SlidePanelTestRoutes = require('terra-slide-panel/tests/nightwatch/SlidePanelTestRoutes');

var _SlidePanelTestRoutes2 = _interopRequireDefault(_SlidePanelTestRoutes);

var _ListTestRoutes = require('terra-list/tests/nightwatch/list/ListTestRoutes');

var _ListTestRoutes2 = _interopRequireDefault(_ListTestRoutes);

var _ListItemTestRoutes = require('terra-list/tests/nightwatch/list-item/ListItemTestRoutes');

var _ListItemTestRoutes2 = _interopRequireDefault(_ListItemTestRoutes);

var _SingleSelectListTestRoutes = require('terra-list/tests/nightwatch/single-select-list/SingleSelectListTestRoutes');

var _SingleSelectListTestRoutes2 = _interopRequireDefault(_SingleSelectListTestRoutes);

var _MultiSelectListTestRoutes = require('terra-list/tests/nightwatch/multi-select-list/MultiSelectListTestRoutes');

var _MultiSelectListTestRoutes2 = _interopRequireDefault(_MultiSelectListTestRoutes);

var _TableTestRoutes = require('terra-table/tests/nightwatch/TableTestRoutes');

var _TableTestRoutes2 = _interopRequireDefault(_TableTestRoutes);

var _ModalTestRoutes = require('terra-modal/tests/nightwatch/ModalTestRoutes');

var _ModalTestRoutes2 = _interopRequireDefault(_ModalTestRoutes);

var _StatusTestRoutes = require('terra-status/tests/nightwatch/StatusTestRoutes');

var _StatusTestRoutes2 = _interopRequireDefault(_StatusTestRoutes);

var _GridTestRoutes = require('terra-grid/tests/nightwatch/GridTestRoutes');

var _GridTestRoutes2 = _interopRequireDefault(_GridTestRoutes);

var _ProgressBarTestRoutes = require('terra-progress-bar/tests/nightwatch/ProgressBarTestRoutes');

var _ProgressBarTestRoutes2 = _interopRequireDefault(_ProgressBarTestRoutes);

var _IconTestRoutes = require('terra-icon/tests/nightwatch/IconTestRoutes');

var _IconTestRoutes2 = _interopRequireDefault(_IconTestRoutes);

var _TestLinks = require('./TestLinks');

var _TestLinks2 = _interopRequireDefault(_TestLinks);

var _FormTestRoutes = require('terra-form/tests/nightwatch/FormTestRoutes');

var _FormTestRoutes2 = _interopRequireDefault(_FormTestRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-enable import/no-extraneous-dependencies */
/* eslint-enable import/first */

// Test
/* eslint-disable import/first */
_reactDom2.default.render(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.hashHistory },
  _react2.default.createElement(_reactRouter.Redirect, { from: '/', to: '/site' }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/site', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'arrange', component: _Index2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'badge', component: _Index4.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'base', component: _Index6.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'button', component: _Index8.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'button-group', component: _Index10.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'content', component: _Index12.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'content-container', component: _Index14.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'datepicker', component: _Index16.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'demographics-banner', component: _Index18.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'form', component: _Index20.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'grid', component: _Index22.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'i18n', component: _Index24.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'icon', component: _Index26.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'image', component: _Index28.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'list', component: _Index30.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'modal', component: _Index32.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'progress-bar', component: _Index34.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'responsive-element', component: _Index36.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'slide-panel', component: _Index38.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'standout', component: _Index40.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'status', component: _Index42.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'title', component: _Index46.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'table', component: _Index44.default })
  ),
  _react2.default.createElement(_reactRouter.Route, { path: '/tests', component: _TestLinks2.default }),
  _ArrangeTestRoutes2.default,
  _BadgeTestRoutes2.default,
  _BaseTestRoutes2.default,
  _ButtonTestRoutes2.default,
  _ButtonGroupTestRoutes2.default,
  _DatePickerTestRoutes2.default,
  _DemographicsBannerTestRoutes2.default,
  _SlidePanelTestRoutes2.default,
  _I18nTestRoutes2.default,
  _IconTestRoutes2.default,
  _ImageTestRoutes2.default,
  _ResponsiveElementTestRoutes2.default,
  _ContentContainerTestRoutes2.default,
  _ListTestRoutes2.default,
  _ListItemTestRoutes2.default,
  _SingleSelectListTestRoutes2.default,
  _MultiSelectListTestRoutes2.default,
  _StatusTestRoutes2.default,
  _TableTestRoutes2.default,
  _ModalTestRoutes2.default,
  _ProgressBarTestRoutes2.default,
  _GridTestRoutes2.default,
  _IconTestRoutes2.default,
  _FormTestRoutes2.default
), document.getElementById('root'));
// Remove eslint-disable as these pacakges are published
/* eslint-disable import/no-extraneous-dependencies */


// Examples