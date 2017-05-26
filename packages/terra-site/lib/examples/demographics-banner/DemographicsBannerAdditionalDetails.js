'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDemographicsBanner = require('terra-demographics-banner');

var _terraDemographicsBanner2 = _interopRequireDefault(_terraDemographicsBanner);

var _demographicsCat = require('../../assets/demographicsCat.jpg');

var _demographicsCat2 = _interopRequireDefault(_demographicsCat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemographicsBannerAdditionalDetails = function DemographicsBannerAdditionalDetails() {
  return _react2.default.createElement(_terraDemographicsBanner2.default, {
    applicationContent: _react2.default.createElement(
      'span',
      null,
      'St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253'
    ),
    age: '25 Years',
    dateOfBirth: 'May 9, 1993',
    dateOfBirthLabel: 'DOB',
    gender: 'Male',
    identifiers: { MRN: 12343, REA: '3JSDA' },
    personName: 'Johnathon Doe',
    photo: _react2.default.createElement('img', { alt: 'My Cat', src: _demographicsCat2.default }),
    preferredFirstName: 'John'
  });
};

exports.default = DemographicsBannerAdditionalDetails;