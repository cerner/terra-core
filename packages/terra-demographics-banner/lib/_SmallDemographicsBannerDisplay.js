'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./_utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /* eslint-disable react/prop-types */


exports.default = function (props) {
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
      (0, _utils.personDetails)(props),
      (0, _utils.applicationIdentifiers)(props)
    ),
    _react2.default.createElement(
      'div',
      { className: 'terra-DemographicsBanner-application-content' },
      applicationContent
    )
  );
};