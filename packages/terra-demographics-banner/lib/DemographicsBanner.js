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

require('./DemographicsBanner.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable global-require, import/no-dynamic-require, react/no-unused-prop-types, react/no-danger */


var propTypes = {
  /**
   * Additional Details to display in the banner.
   */
  additionalDetails: _react.PropTypes.node,
  /**
   * Age of the person.
   */
  age: _react.PropTypes.string,
  /**
   * Additional rows of key value pairs to add to the demographics banner. The rows will be added after the person rows.
   */
  applicationRows: _react.PropTypes.array,
  /**
   * The persons date of birth
   */
  dateOfBirth: _react.PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: _react.PropTypes.string,
  /**
   * Gender of the Person
   */
  gender: _react.PropTypes.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: _react.PropTypes.string,
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
   * The persons preferred first name if they have one.
   */
  preferredFirstName: _react.PropTypes.string
};

var defaultProps = {
  additionalDetails: null,
  age: null,
  applicationRows: [],
  dateOfBirth: null,
  deceasedDate: null,
  gender: null,
  gestationalAge: null,
  identifiers: {},
  personName: null,
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
    key: 'additionalApplicationRows',
    value: function additionalApplicationRows() {
      return this.props.applicationRows.map(function (row, index) {
        return (
          // eslint-disable-next-line react/no-array-index-key
          _react2.default.createElement(
            'div',
            { key: 'additional-row-' + index, className: 'terra-DemographicsBanner--row' },
            Object.keys(row).map(function (key) {
              return _react2.default.createElement(
                'span',
                { key: 'additional-row-' + key + '-' + row[key] },
                key,
                ': ',
                _react2.default.createElement(
                  'b',
                  null,
                  row[key]
                )
              );
            })
          )
        );
      });
    }
  }, {
    key: 'personDetails',
    value: function personDetails() {
      var noDataMessage = '--';
      var dateOfBirth = this.props.dateOfBirth || 'DOB: ' + noDataMessage;

      var elements = [_react2.default.createElement(
        'span',
        { key: 'age' },
        _react2.default.createElement(
          'b',
          null,
          this.props.age || noDataMessage
        )
      ), _react2.default.createElement(
        'span',
        { key: 'gender' },
        _react2.default.createElement(
          'b',
          null,
          this.props.gender || noDataMessage
        )
      ), _react2.default.createElement('span', { key: 'dob', dangerouslySetInnerHTML: { __html: dateOfBirth } })];

      if (this.props.gestationalAge) {
        elements.push(_react2.default.createElement('span', { key: 'ga', dangerouslySetInnerHTML: { __html: this.props.gestationalAge } }));
      }

      if (this.props.postMenstrualAge) {
        elements.push(_react2.default.createElement('span', { key: 'pma', dangerouslySetInnerHTML: { __html: this.props.postMenstrualAge } }));
      }

      if (this.props.deceasedDate) {
        elements.push(_react2.default.createElement('span', { key: 'deceased', dangerouslySetInnerHTML: { __html: this.props.deceasedDate } }));
      }

      return elements;
    }
  }, {
    key: 'applicationIdentifiers',
    value: function applicationIdentifiers() {
      var identifiers = this.props.identifiers;

      if (identifiers) {
        return Object.keys(identifiers).map(function (key) {
          return _react2.default.createElement(
            'span',
            { key: 'identifier-' + key },
            key,
            ': ',
            _react2.default.createElement(
              'b',
              null,
              identifiers[key]
            )
          );
        });
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          age = _props.age,
          additionalDetails = _props.additionalDetails,
          applicationRows = _props.applicationRows,
          dateOfBirth = _props.dateOfBirth,
          deceasedDate = _props.deceasedDate,
          gender = _props.gender,
          gestationalAge = _props.gestationalAge,
          identifiers = _props.identifiers,
          personName = _props.personName,
          photo = _props.photo,
          postMenstrualAge = _props.postMenstrualAge,
          preferredFirstName = _props.preferredFirstName,
          customProps = _objectWithoutProperties(_props, ['age', 'additionalDetails', 'applicationRows', 'dateOfBirth', 'deceasedDate', 'gender', 'gestationalAge', 'identifiers', 'personName', 'photo', 'postMenstrualAge', 'preferredFirstName']);

      var mainClasses = (0, _classnames2.default)('terra-DemographicsBanner', { 'terra-DemographicsBanner--deceased': deceasedDate }, customProps.className);

      delete customProps.className;

      return _react2.default.createElement(
        'section',
        _extends({ className: mainClasses }, customProps),
        _react2.default.createElement(
          'div',
          null,
          this.props.photo
        ),
        _react2.default.createElement(
          'div',
          { className: 'terra-DemographicsBanner--content' },
          _react2.default.createElement(
            'div',
            { className: 'terra-DemographicsBanner--row' },
            _react2.default.createElement(
              'h1',
              { className: 'terra-DemographicsBanner--person-name' },
              personName || '--',
              preferredFirstName && _react2.default.createElement(
                'span',
                { className: 'terra-DemographicsBanner--preferred-first-name' },
                preferredFirstName
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'terra-DemographicsBanner--application-content' },
              additionalDetails
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'terra-DemographicsBanner--row' },
            _react2.default.createElement(
              'div',
              { className: 'terra-DemographicsBanner--person-details' },
              this.personDetails()
            ),
            _react2.default.createElement(
              'div',
              { className: 'terra-DemographicsBanner--identifiers' },
              this.applicationIdentifiers()
            )
          ),
          this.additionalApplicationRows()
        )
      );
    }
  }]);

  return DemographicsBanner;
}(_react2.default.Component);

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

exports.default = DemographicsBanner;