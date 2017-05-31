'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable global-require, import/no-dynamic-require, react/no-unused-prop-types, react/no-danger */


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

var DemographicsBanner = function (_React$Component) {
  _inherits(DemographicsBanner, _React$Component);

  function DemographicsBanner() {
    _classCallCheck(this, DemographicsBanner);

    return _possibleConstructorReturn(this, (DemographicsBanner.__proto__ || Object.getPrototypeOf(DemographicsBanner)).apply(this, arguments));
  }

  _createClass(DemographicsBanner, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          age = _props.age,
          dateOfBirth = _props.dateOfBirth,
          gender = _props.gender,
          personName = _props.personName,
          intl = _props.intl,
          customProps = _objectWithoutProperties(_props, ['age', 'dateOfBirth', 'gender', 'personName', 'intl']);

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
    }
  }]);

  return DemographicsBanner;
}(_react2.default.Component);

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

exports.default = (0, _reactIntl.injectIntl)(DemographicsBanner);