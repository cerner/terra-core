'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactIntl = require('react-intl');

var _DemographicsBannerDisplay = require('./DemographicsBannerDisplay');

var _DemographicsBannerDisplay2 = _interopRequireDefault(_DemographicsBannerDisplay);

require('terra-base/lib/baseStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable global-require, import/no-dynamic-require, react/no-unused-prop-types, react/no-danger */


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
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: _propTypes2.default.string,
  /**
   * Gender of the Person
   */
  gender: _propTypes2.default.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: _propTypes2.default.string,
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
   * The persons preferred first name if they have one.
   */
  preferredFirstName: _propTypes2.default.string
};

var defaultProps = {
  applicationContent: null,
  age: undefined,
  dateOfBirth: undefined,
  deceasedDate: null,
  gender: undefined,
  gestationalAge: null,
  identifiers: {},
  personName: undefined,
  photo: null,
  postMenstrualAge: null,
  preferredFirstName: null
};

var DemographicsBanner = function DemographicsBanner(_ref) {
  var age = _ref.age,
      dateOfBirth = _ref.dateOfBirth,
      gender = _ref.gender,
      personName = _ref.personName,
      intl = _ref.intl,
      customProps = _objectWithoutProperties(_ref, ['age', 'dateOfBirth', 'gender', 'personName', 'intl']);

  var noDataProvided = intl.formatMessage({ id: 'Terra.demographicsBanner.noDataProvided' });

  return _react2.default.createElement(_DemographicsBannerDisplay2.default, _extends({}, customProps, {
    age: age !== undefined ? age : noDataProvided,
    dateOfBirth: dateOfBirth !== undefined ? dateOfBirth : noDataProvided,
    gender: gender !== undefined ? gender : noDataProvided,
    personName: personName !== undefined ? personName : noDataProvided,
    dateOfBirthLabel: intl.formatMessage({ id: 'Terra.demographicsBanner.dateOfBirth' }),
    deceasedDateLabel: intl.formatMessage({ id: 'Terra.demographicsBanner.deceased' }),
    gestationalAgeLabel: intl.formatMessage({ id: 'Terra.demographicsBanner.gestationalAge' }),
    postMenstrualAgeLabel: intl.formatMessage({ id: 'Terra.demographicsBanner.postMenstrualAge' })
  }));
};

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

exports.default = (0, _reactIntl.injectIntl)(DemographicsBanner);