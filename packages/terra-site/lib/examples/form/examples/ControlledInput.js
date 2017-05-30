'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _Field = require('terra-form/lib/Field');

var _Field2 = _interopRequireDefault(_Field);

var _Fieldset = require('terra-form/lib/Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _Input = require('terra-form/lib/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // remove eslint-disable once terra-form has been published
/* eslint-disable import/no-extraneous-dependencies */


/* eslint-enable import/no-extraneous-dependencies */

var ControlledInput = function (_React$Component) {
  _inherits(ControlledInput, _React$Component);

  function ControlledInput(props) {
    _classCallCheck(this, ControlledInput);

    var _this = _possibleConstructorReturn(this, (ControlledInput.__proto__ || Object.getPrototypeOf(ControlledInput)).call(this, props));

    _this.state = {
      formData: {
        jobTitle: '',
        first: '',
        middle: '',
        last: ''
      }
    };

    _this.handleEmploymentUpdate = _this.handleEmploymentUpdate.bind(_this);
    _this.handleNameUpdate = _this.handleNameUpdate.bind(_this);
    _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
    return _this;
  }

  _createClass(ControlledInput, [{
    key: 'handleEmploymentUpdate',
    value: function handleEmploymentUpdate(e) {
      var formData = _extends({}, this.state.formData);
      formData.jobTitle = e.target.value;
      this.setState({ formData: formData });
    }
  }, {
    key: 'handleNameUpdate',
    value: function handleNameUpdate(e) {
      var formData = _extends({}, this.state.formData);
      formData[e.target.name] = e.target.value;
      this.setState({ formData: formData });
    }
  }, {
    key: 'handleFormSubmit',
    value: function handleFormSubmit(e) {
      e.preventDefault();

      this.setState({
        submittedData: _extends({}, this.state.formData)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleFormSubmit },
        _react2.default.createElement(
          _Field2.default,
          {
            label: 'Current or Most Recent Employment Title',
            help: 'This is your most recent employment position',
            required: true
          },
          _react2.default.createElement(_Input2.default, { type: 'text', name: 'employment', value: this.state.formData.jobTitle, onChange: this.handleEmploymentUpdate })
        ),
        _react2.default.createElement(
          _Fieldset2.default,
          {
            legend: 'Name',
            required: true
          },
          _react2.default.createElement(
            _Field2.default,
            {
              label: 'First',
              isInline: true,
              required: true
            },
            _react2.default.createElement(_Input2.default, { type: 'text', name: 'first', value: this.state.formDatafirst, onChange: this.handleNameUpdate })
          ),
          _react2.default.createElement(
            _Field2.default,
            {
              label: 'Middle',
              isInline: true
            },
            _react2.default.createElement(_Input2.default, { type: 'text', name: 'middle', value: this.state.formData.middle, onChange: this.handleNameUpdate })
          ),
          _react2.default.createElement(
            _Field2.default,
            {
              label: 'Last',
              isInline: true,
              required: true
            },
            _react2.default.createElement(_Input2.default, { type: 'text', name: 'last', value: this.state.formData.last, onChange: this.handleNameUpdate })
          )
        ),
        _react2.default.createElement(_terraButton2.default, { text: 'Submit', type: 'submit' }),
        this.state.submittedData && [_react2.default.createElement('hr', null), _react2.default.createElement(
          'p',
          null,
          'Form was submitted with ',
          JSON.stringify(this.state.submittedData)
        )]
      );
    }
  }]);

  return ControlledInput;
}(_react2.default.Component);

exports.default = ControlledInput;