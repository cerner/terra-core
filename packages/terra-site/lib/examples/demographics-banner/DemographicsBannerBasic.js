'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraDemographicsBanner = require('terra-demographics-banner');

var _terraDemographicsBanner2 = _interopRequireDefault(_terraDemographicsBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicDemographicsBanner = function BasicDemographicsBanner() {
  return _react2.default.createElement(_terraDemographicsBanner2.default, {
    age: '25 Years',
    dateOfBirth: 'May 9, 1993',
    dateOfBirthLabel: 'DOB',
    gender: 'Male',
    personName: 'Johnathon Doe',
    preferredFirstName: 'John'
  });
};

exports.default = BasicDemographicsBanner;