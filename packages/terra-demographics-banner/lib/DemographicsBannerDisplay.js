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

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

require('terra-base/lib/baseStyles');

require('./DemographicsBanner.scss');

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

// eslint-disable-next-line react/prop-types
var DemographicsBannerValue = function DemographicsBannerValue(_ref) {
  var label = _ref.label,
      value = _ref.value;
  return _react2.default.createElement(
    'span',
    { className: 'terra-DemographicsBanner-value' },
    label && _react2.default.createElement(
      'span',
      { className: 'terra-DemographicsBanner-value-label' },
      label + ':'
    ),
    _react2.default.createElement(
      'b',
      null,
      value
    )
  );
};

var personDetails = function personDetails(props) {
  var elements = [_react2.default.createElement(DemographicsBannerValue, { key: 'age', value: props.age }), _react2.default.createElement(DemographicsBannerValue, { key: 'gender', value: props.gender }), _react2.default.createElement(DemographicsBannerValue, {
    key: 'dob',
    label: props.dateOfBirthLabel,
    value: props.dateOfBirth
  })];

  if (props.gestationalAge) {
    elements.push(_react2.default.createElement(DemographicsBannerValue, {
      key: 'ga',
      label: props.gestationalAgeLabel,
      value: props.gestationalAge
    }));
  }

  if (props.postMenstrualAge) {
    elements.push(_react2.default.createElement(DemographicsBannerValue, {
      key: 'pma',
      label: props.postMenstrualAgeLabel,
      value: props.postMenstrualAge
    }));
  }

  if (props.deceasedDate) {
    elements.push(_react2.default.createElement(DemographicsBannerValue, {
      key: 'deceased',
      label: props.deceasedDateLabel,
      value: props.deceasedDate
    }));
  }

  return elements;
};

var applicationIdentifiers = function applicationIdentifiers(props) {
  var identifiers = props.identifiers;

  if (identifiers) {
    return Object.keys(identifiers).map(function (key) {
      return _react2.default.createElement(DemographicsBannerValue, {
        key: 'identifier-' + key,
        label: key,
        value: identifiers[key]
      });
    });
  }

  return null;
};

var SmallDemographicsBannerDisplay = function SmallDemographicsBannerDisplay(props) {
  var age = props.age,
      applicationContent = props.applicationContent,
      dateOfBirth = props.dateOfBirth,
      dateOfBirthLabel = props.dateOfBirthLabel,
      deceasedDate = props.deceasedDate,
      deceasedDateLabel = props.deceasedDateLabel,
      gender = props.gender,
      gestationalAge = props.gestationalAge,
      gestationalAgeLabel = props.gestationalAgeLabel,
      identifiers = props.identifiers,
      personName = props.personName,
      photo = props.photo,
      postMenstrualAge = props.postMenstrualAge,
      postMenstrualAgeLabel = props.postMenstrualAgeLabel,
      preferredFirstName = props.preferredFirstName,
      customProps = _objectWithoutProperties(props, ['age', 'applicationContent', 'dateOfBirth', 'dateOfBirthLabel', 'deceasedDate', 'deceasedDateLabel', 'gender', 'gestationalAge', 'gestationalAgeLabel', 'identifiers', 'personName', 'photo', 'postMenstrualAge', 'postMenstrualAgeLabel', 'preferredFirstName']);

  var mainClasses = (0, _classnames2.default)('terra-DemographicsBanner', { 'terra-DemographicsBanner--deceased': deceasedDate }, customProps.className);

  delete customProps.className;

  return _react2.default.createElement(
    'section',
    _extends({ className: mainClasses }, customProps),
    _react2.default.createElement(
      'h1',
      { className: 'terra-DemographicsBanner-person-name' },
      _react2.default.createElement(
        'span',
        null,
        personName,
        preferredFirstName && _react2.default.createElement(
          'span',
          { className: 'terra-DemographicsBanner-preferred-first-name' },
          preferredFirstName
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'terra-DemographicsBanner-person-details' },
      personDetails(props),
      applicationIdentifiers(props)
    ),
    _react2.default.createElement(
      'div',
      { className: 'terra-DemographicsBanner-application-content' },
      applicationContent
    )
  );
};

var LargeDemographicsBannerDisplay = function LargeDemographicsBannerDisplay(props) {
  var age = props.age,
      applicationContent = props.applicationContent,
      dateOfBirth = props.dateOfBirth,
      dateOfBirthLabel = props.dateOfBirthLabel,
      deceasedDate = props.deceasedDate,
      deceasedDateLabel = props.deceasedDateLabel,
      gender = props.gender,
      gestationalAge = props.gestationalAge,
      gestationalAgeLabel = props.gestationalAgeLabel,
      identifiers = props.identifiers,
      personName = props.personName,
      photo = props.photo,
      postMenstrualAge = props.postMenstrualAge,
      postMenstrualAgeLabel = props.postMenstrualAgeLabel,
      preferredFirstName = props.preferredFirstName,
      customProps = _objectWithoutProperties(props, ['age', 'applicationContent', 'dateOfBirth', 'dateOfBirthLabel', 'deceasedDate', 'deceasedDateLabel', 'gender', 'gestationalAge', 'gestationalAgeLabel', 'identifiers', 'personName', 'photo', 'postMenstrualAge', 'postMenstrualAgeLabel', 'preferredFirstName']);

  var mainClasses = (0, _classnames2.default)('terra-DemographicsBanner', { 'terra-DemographicsBanner--deceased': deceasedDate }, customProps.className);

  delete customProps.className;

  return _react2.default.createElement(
    'section',
    _extends({ className: mainClasses }, customProps),
    _react2.default.createElement(
      'div',
      { className: 'terra-DemographicsBanner-profile-photo' },
      props.photo
    ),
    _react2.default.createElement(
      'div',
      { className: 'terra-DemographicsBanner-content' },
      _react2.default.createElement(
        'div',
        { className: 'terra-DemographicsBanner-row' },
        _react2.default.createElement(
          'h1',
          { className: 'terra-DemographicsBanner-person-name' },
          personName,
          preferredFirstName && _react2.default.createElement(
            'span',
            { className: 'terra-DemographicsBanner-preferred-first-name' },
            preferredFirstName
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'terra-DemographicsBanner-application-content' },
          applicationContent
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'terra-DemographicsBanner-row' },
        _react2.default.createElement(
          'div',
          { className: 'terra-DemographicsBanner-person-details' },
          personDetails(props)
        ),
        _react2.default.createElement(
          'div',
          { className: 'terra-DemographicsBanner-identifiers' },
          applicationIdentifiers(props)
        )
      )
    )
  );
};

var DemographicsBannerDisplay = function DemographicsBannerDisplay(props) {
  return _react2.default.createElement(_terraResponsiveElement2.default, {
    responsiveTo: 'window',
    defaultElement: _react2.default.createElement(SmallDemographicsBannerDisplay, props),
    small: _react2.default.createElement(LargeDemographicsBannerDisplay, props)
  });
};

SmallDemographicsBannerDisplay.propTypes = propTypes;
LargeDemographicsBannerDisplay.propTypes = propTypes;

DemographicsBannerDisplay.propTypes = propTypes;
DemographicsBannerDisplay.defaultProps = defaultProps;

exports.default = DemographicsBannerDisplay;