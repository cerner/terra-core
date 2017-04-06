'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _i18nLoader = require('terra-i18n/lib/i18nLoader');

var _i18nLoader2 = _interopRequireDefault(_i18nLoader);

var _I18nProvider = require('terra-i18n/lib/I18nProvider');

var _I18nProvider2 = _interopRequireDefault(_I18nProvider);

require('./DemographicsBanner.scss');

var _DemographicsBannerDisplay = require('./DemographicsBannerDisplay');

var _DemographicsBannerDisplay2 = _interopRequireDefault(_DemographicsBannerDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable global-require, import/no-dynamic-require, react/no-unused-prop-types */


var propTypes = {
  /**
   * Full Name of the person
   */
  personName: _react.PropTypes.string,
  /**
   * The persons preferred first name if they have one.
   */
  preferredFirstName: _react.PropTypes.string,
  /**
   * Photo to display in the banner
   */
  photo: _react.PropTypes.node,
  /**
   * Age of the person.
   */
  age: _react.PropTypes.string,
  /**
   * Gender of the Person
   */
  gender: _react.PropTypes.string,
  /**
   * Locale to display the banner with
   */
  locale: _react.PropTypes.string,
  /**
   * Additional key value identifiers of a person's demographic information
   */
  identifiers: _react.PropTypes.object,
  /**
   * The persons date of birth
   */
  dateOfBirth: _react.PropTypes.string,
  /**
   * The persons gestational age.
   */
  gestationalAge: _react.PropTypes.string,
  /**
   * The column layout in which to present the displays.
   */
  postMenstrualAge: _react.PropTypes.string,
  /**
   * The person's deceased date. Will display the banner as deceased if this value is provided
   */
  deceasedDate: _react.PropTypes.string,
  /**
   * Additional Details to display in the banner.
   */
  additionalDetails: _react.PropTypes.node,
  /**
   * Additional rows of key value pairs to add to the demographics banner. The rows will be added after the person rows.
   */
  applicationRows: _react.PropTypes.array
};

var defaultProps = {
  personName: null,
  preferredFirstName: null,
  photo: null,
  age: null,
  gender: null,
  identifiers: {},
  locale: 'en',
  dateOfBirth: null,
  gestationalAge: null,
  postMenstrualAge: null,
  deceasedDate: null,
  additionalDetails: null,
  applicationRows: []
};

var DemographicsBanner = function (_React$Component) {
  _inherits(DemographicsBanner, _React$Component);

  function DemographicsBanner(props) {
    _classCallCheck(this, DemographicsBanner);

    var _this = _possibleConstructorReturn(this, (DemographicsBanner.__proto__ || Object.getPrototypeOf(DemographicsBanner)).call(this, props));

    _this.state = {
      demographicsMessages: require('./translations/' + props.locale + '.js')
    };
    return _this;
  }

  _createClass(DemographicsBanner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _i18nLoader2.default)(this.props.locale, this.setState, this);
    }
  }, {
    key: 'render',
    value: function render() {
      var bannerProps = _extends({}, this.props);
      delete bannerProps.locale;

      if (this.state.load) {
        return _react2.default.createElement(
          _I18nProvider2.default,
          { locale: this.props.locale, messages: _extends(this.state.messages, this.state.demographicsMessages) },
          _react2.default.createElement(_DemographicsBannerDisplay2.default, bannerProps)
        );
      }

      return null;
    }
  }]);

  return DemographicsBanner;
}(_react2.default.Component);

DemographicsBanner.propTypes = propTypes;
DemographicsBanner.defaultProps = defaultProps;

exports.default = DemographicsBanner;