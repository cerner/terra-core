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

var _README = require('terra-demographics-banner/docs/README.md');

var _README2 = _interopRequireDefault(_README);

var _terraDemographicsBanner = require('terra-demographics-banner');

var _terraDemographicsBanner2 = _interopRequireDefault(_terraDemographicsBanner);

var _DemographicsBannerAdditionalAges = require('./DemographicsBannerAdditionalAges');

var _DemographicsBannerAdditionalAges2 = _interopRequireDefault(_DemographicsBannerAdditionalAges);

var _DemographicsBannerAdditionalDetails = require('./DemographicsBannerAdditionalDetails');

var _DemographicsBannerAdditionalDetails2 = _interopRequireDefault(_DemographicsBannerAdditionalDetails);

var _DemographicsBannerBasic = require('./DemographicsBannerBasic');

var _DemographicsBannerBasic2 = _interopRequireDefault(_DemographicsBannerBasic);

var _DemographicsBannerDeceased = require('./DemographicsBannerDeceased');

var _DemographicsBannerDeceased2 = _interopRequireDefault(_DemographicsBannerDeceased);

var _DemographicsBanner = require('!raw-loader!terra-demographics-banner/src/DemographicsBanner.jsx');

var _DemographicsBanner2 = _interopRequireDefault(_DemographicsBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var DemographicsBannerExamples = function DemographicsBannerExamples() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_terraMarkdown2.default, { id: 'readme', src: _README2.default }),
    _react2.default.createElement(_terraPropsTable2.default, { id: 'props', src: _DemographicsBanner2.default }),
    _react2.default.createElement(
      'h1',
      null,
      'Basic Demographics Banner'
    ),
    _react2.default.createElement(_DemographicsBannerBasic2.default, null),
    _react2.default.createElement(
      'h1',
      null,
      'Demographics Banner with Missing Data'
    ),
    _react2.default.createElement(_terraDemographicsBanner2.default, null),
    _react2.default.createElement(
      'h1',
      null,
      'Deceased Demographics Banners'
    ),
    _react2.default.createElement(_DemographicsBannerDeceased2.default, null),
    _react2.default.createElement(
      'h1',
      null,
      'Demographics Banner with Gestational and Post Menstrural ages'
    ),
    _react2.default.createElement(_DemographicsBannerAdditionalAges2.default, null),
    _react2.default.createElement(
      'h1',
      null,
      'Demographics Banner with Additional Details'
    ),
    _react2.default.createElement(_DemographicsBannerAdditionalDetails2.default, null)
  );
};

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
exports.default = DemographicsBannerExamples;