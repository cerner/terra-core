'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

require('terra-base/lib/baseStyles');

require('./DemographicsBanner.scss');

var _SmallDemographicsBannerDisplay = require('./_SmallDemographicsBannerDisplay');

var _SmallDemographicsBannerDisplay2 = _interopRequireDefault(_SmallDemographicsBannerDisplay);

var _LargeDemographicsBannerDisplay = require('./_LargeDemographicsBannerDisplay');

var _LargeDemographicsBannerDisplay2 = _interopRequireDefault(_LargeDemographicsBannerDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Application content to display in the banner.
   */
  applicationContent: _propTypes2.default.node,
  /**
   * Age of the person.
   */
  age: _propTypes2.default.string,
  /**
   * The persons date of birth
   */
  dateOfBirth: _propTypes2.default.string,
  /**
   * Label to display for the date of birth
   */
  dateOfBirthLabel: _propTypes2.default.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: _propTypes2.default.string,
  /**
   * Label to display for the deceased date
   */
  deceasedDateLabel: _propTypes2.default.string,
  /**
   * Gender of the Person
   */
  gender: _propTypes2.default.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: _propTypes2.default.string,
  /**
   * Label to display for the GestationalAge
   */
  gestationalAgeLabel: _propTypes2.default.string,
  /**
   * Additional key value identifiers of a person's demographic information
   */
  identifiers: _propTypes2.default.object,
  /**
   * Full Name of the person
   */
  personName: _propTypes2.default.string,
  /**
   * Photo to display in the banner
   */
  photo: _propTypes2.default.node,
  /**
   * The column layout in which to present the displays.
   */
  postMenstrualAge: _propTypes2.default.string,
  /**
   * Label to display for the PostMenstrualAgeLabel
   */
  postMenstrualAgeLabel: _propTypes2.default.string,
  /**
   * The persons preferred first name if they have one.
   */
  preferredFirstName: _propTypes2.default.string
};

var defaultProps = {
  applicationContent: null,
  age: '--',
  dateOfBirth: '--',
  dateOfBirthLabel: 'DOB',
  deceasedDate: null,
  deceasedDateLabel: 'Deceased',
  gender: '--',
  gestationalAge: null,
  gestationalAgeLabel: 'GA',
  identifiers: {},
  personName: '--',
  photo: null,
  postMenstrualAge: null,
  postMenstrualAgeLabel: 'PMA',
  preferredFirstName: null
};

var DemographicsBannerDisplay = function DemographicsBannerDisplay(props) {
  return _react2.default.createElement(_terraResponsiveElement2.default, {
    responsiveTo: 'window',
    defaultElement: _react2.default.createElement(_SmallDemographicsBannerDisplay2.default, props),
    small: _react2.default.createElement(_LargeDemographicsBannerDisplay2.default, props)
  });
};

DemographicsBannerDisplay.propTypes = propTypes;
DemographicsBannerDisplay.defaultProps = defaultProps;

exports.default = DemographicsBannerDisplay;