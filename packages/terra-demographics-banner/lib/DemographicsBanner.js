'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _terraResponsiveElement = require('terra-responsive-element');

var _terraResponsiveElement2 = _interopRequireDefault(_terraResponsiveElement);

require('terra-base/lib/baseStyles');

require('./DemographicsBanner.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable global-require, import/no-dynamic-require, react/no-unused-prop-types, react/no-danger */


var propTypes = {
  /**
   * Application content to display in the banner.
   */
  applicationContent: _react.PropTypes.node,
  /**
   * Age of the person.
   */
  age: _react.PropTypes.string,
  /**
   * The persons date of birth
   */
  dateOfBirth: _react.PropTypes.string,
  /**
   * Label to display for the date of birth
   */
  dateOfBirthLabel: _react.PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: _react.PropTypes.string,
  /**
   * Label to display for the deceased date
   */
  deceasedDateLabel: _react.PropTypes.string,
  /**
   * Gender of the Person
   */
  gender: _react.PropTypes.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: _react.PropTypes.string,
  /**
   * Label to display for the GestationalAge
   */
  gestationalAgeLabel: _react.PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information
   */
  identifiers: _react.PropTypes.object,
  /**
   * Full Name of the person
   */
  personName: _react.PropTypes.string,
  /**
   * Photo to display in the banner
   */
  photo: _react.PropTypes.node,
  /**
   * The column layout in which to present the displays.
   */
  postMenstrualAge: _react.PropTypes.string,
  /**
   * Label to display for the PostMenstrualAgeLabel
   */
  postMenstrualAgeLabel: _react.PropTypes.string,
  /**
   * The persons preferred first name if they have one.
   */
  preferredFirstName: _react.PropTypes.string
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
  gestationalAgeLabel: null,
  identifiers: {},
  personName: '--',
  photo: null,
  postMenstrualAge: null,
  postMenstrualAgeLabel: null,
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

var DemographicsBanner = function (_React$Component) {
  _inherits(DemographicsBanner, _React$Component);

  function DemographicsBanner() {
    _classCallCheck(this, DemographicsBanner);

    return _possibleConstructorReturn(this, (DemographicsBanner.__proto__ || Object.getPrototypeOf(DemographicsBanner)).apply(this, arguments));
  }

  _createClass(DemographicsBanner, [{
    key: 'personDetails',
    value: function personDetails() {
      var elements = [_react2.default.createElement(DemographicsBannerValue, { key: 'age', value: this.props.age }), _react2.default.createElement(DemographicsBannerValue, { key: 'gender', value: this.props.gender }), _react2.default.createElement(DemographicsBannerValue, {
        key: 'dob',
        label: this.props.dateOfBirthLabel,
        value: this.props.dateOfBirth
      })];

      if (this.props.gestationalAge) {
        elements.push(_react2.default.createElement(DemographicsBannerValue, {
          key: 'ga',
          label: this.props.gestationalAgeLabel,
          value: this.props.gestationalAge
        }));
      }

      if (this.props.postMenstrualAge) {
        elements.push(_react2.default.createElement(DemographicsBannerValue, {
          key: 'pma',
          label: this.props.postMenstrualAgeLabel,
          value: this.props.postMenstrualAge
        }));
      }

      if (this.props.deceasedDate) {
        elements.push(_react2.default.createElement(DemographicsBannerValue, {
          key: 'deceased',
          label: this.props.deceasedDateLabel,
          value: this.props.deceasedDate
        }));
      }

      return elements;
    }
  }, {
    key: 'applicationIdentifiers',
    value: function applicationIdentifiers() {
      var identifiers = this.props.identifiers;

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
    }
  }, {
    key: 'renderLargeDemographicsBanner',
    value: function renderLargeDemographicsBanner() {
      var _props = this.props,
          age = _props.age,
          applicationContent = _props.applicationContent,
          dateOfBirth = _props.dateOfBirth,
          dateOfBirthLabel = _props.dateOfBirthLabel,
          deceasedDate = _props.deceasedDate,
          deceasedDateLabel = _props.deceasedDateLabel,
          gender = _props.gender,
          gestationalAge = _props.gestationalAge,
          gestationalAgeLabel = _props.gestationalAgeLabel,
          identifiers = _props.identifiers,
          personName = _props.personName,
          photo = _props.photo,
          postMenstrualAge = _props.postMenstrualAge,
          postMenstrualAgeLabel = _props.postMenstrualAgeLabel,
          preferredFirstName = _props.preferredFirstName,
          customProps = _objectWithoutProperties(_props, ['age', 'applicationContent', 'dateOfBirth', 'dateOfBirthLabel', 'deceasedDate', 'deceasedDateLabel', 'gender', 'gestationalAge', 'gestationalAgeLabel', 'identifiers', 'personName', 'photo', 'postMenstrualAge', 'postMenstrualAgeLabel', 'preferredFirstName']);

      var mainClasses = (0, _classnames2.default)('terra-DemographicsBanner', { 'terra-DemographicsBanner--deceased': deceasedDate }, customProps.className);

      delete customProps.className;

      return _react2.default.createElement(
        'section',
        _extends({ className: mainClasses }, customProps),
        _react2.default.createElement(
          'div',
          { className: 'terra-DemographicsBanner-profile-photo' },
          this.props.photo
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
              this.personDetails()
            ),
            _react2.default.createElement(
              'div',
              { className: 'terra-DemographicsBanner-identifiers' },
              this.applicationIdentifiers()
            )
          )
        )
      );
    }
  }, {
    key: 'renderSmallDemographicsBanner',
    value: function renderSmallDemographicsBanner() {
      var _props2 = this.props,
          age = _props2.age,
          applicationContent = _props2.applicationContent,
          dateOfBirth = _props2.dateOfBirth,
          dateOfBirthLabel = _props2.dateOfBirthLabel,
          deceasedDate = _props2.deceasedDate,
          deceasedDateLabel = _props2.deceasedDateLabel,
          gender = _props2.gender,
          gestationalAge = _props2.gestationalAge,
          gestationalAgeLabel = _props2.gestationalAgeLabel,
          identifiers = _props2.identifiers,
          personName = _props2.personName,
          photo = _props2.photo,
          postMenstrualAge = _props2.postMenstrualAge,
          postMenstrualAgeLabel = _props2.postMenstrualAgeLabel,
          preferredFirstName = _props2.preferredFirstName,
          customProps = _objectWithoutProperties(_props2, ['age', 'applicationContent', 'dateOfBirth', 'dateOfBirthLabel', 'deceasedDate', 'deceasedDateLabel', 'gender', 'gestationalAge', 'gestationalAgeLabel', 'identifiers', 'personName', 'photo', 'postMenstrualAge', 'postMenstrualAgeLabel', 'preferredFirstName']);

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
          this.personDetails(),
          this.applicationIdentifiers()
        ),
        _react2.default.createElement(
          'div',
          { className: 'terra-DemographicsBanner-application-content' },
          applicationContent
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_terraResponsiveElement2.default, {
        responsiveTo: 'window',
        defaultElement: this.renderSmallDemographicsBanner(),
        small: this.renderLargeDemographicsBanner()
      });
    }
  }]);

  return DemographicsBanner;
}(_react2.default.Component);

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

exports.default = DemographicsBanner;