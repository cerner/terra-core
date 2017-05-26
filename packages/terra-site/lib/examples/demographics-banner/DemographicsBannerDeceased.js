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

var DemographicsBannerDeceased = function DemographicsBannerDeceased() {
  return _react2.default.createElement(_terraDemographicsBanner2.default, {
    age: '25 Years',
    dateOfBirth: 'May 9, 1992',
    dateOfBirthLabel: 'DOB',
    deceasedDate: 'March 12, 2017',
    deceasedDateLabel: 'Deceased',
    gender: 'True Male',
    identifiers: { MRN: 12343, REA: '3JSDA' },
    photo: _react2.default.createElement('img', { alt: 'My Cat', src: _demographicsCat2.default }),
    personName: 'Johnathon Doe',
    preferredFirstName: 'John'
  });
};

exports.default = DemographicsBannerDeceased;