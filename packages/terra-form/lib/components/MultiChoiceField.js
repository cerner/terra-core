'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

var _Fieldset = require('./Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // eslint-disable react/jsx-boolean-value

var propTypes = {
  /**
   * Choices to populate radio buttosn for
   */
  choices: _react.PropTypes.array,
  /**
   * The property name for the choice object used to set the choice label
   */
  choiceName: _react.PropTypes.string,
  /**
   * The property name for the choice object used to set the choice value
   */
  choiceValue: _react.PropTypes.string,
  /**
   * Error message for when the input is invalid
   */
  error: _react.PropTypes.node,
  /**
   *  Help element to display with the input
   */
  help: _react.PropTypes.node,
  /**
   * Whether the field is inline
   */
  isInline: _react.PropTypes.bool,
  /**
   * Legend of the fieldset
   */
  legend: _react.PropTypes.node,
  /**
   * Name of the input attribute
   */
  name: _react.PropTypes.string,
  /**
   * Function to trigger when user selects one of the radio buttons
   */
  onChange: _react.PropTypes.func
};

var defaultProps = {
  choices: [],
  choiceName: 'name',
  choiceValue: 'value',
  error: null,
  help: null,
  isInline: false,
  legend: null,
  name: null,
  onChange: function onChange() {}
};

var MultiChoiceField = function MultiChoiceField(_ref) {
  var choices = _ref.choices,
      choiceName = _ref.choiceName,
      choiceValue = _ref.choiceValue,
      error = _ref.error,
      help = _ref.help,
      isInline = _ref.isInline,
      legend = _ref.legend,
      name = _ref.name,
      onChange = _ref.onChange,
      customProps = _objectWithoutProperties(_ref, ['choices', 'choiceName', 'choiceValue', 'error', 'help', 'isInline', 'legend', 'name', 'onChange']);

  return _react2.default.createElement(
    _Fieldset2.default,
    _extends({
      error: error,
      legend: legend,
      help: help,
      isInline: isInline
    }, customProps),
    choices.map(function (choice) {
      return _react2.default.createElement(_Control2.default, {
        key: choice[choiceName] + '-' + choice[choiceValue],
        name: name,
        value: choice[choiceValue],
        label: choice[choiceName],
        onChange: onChange,
        type: 'checkbox'
      });
    })
  );
};

MultiChoiceField.propTypes = propTypes;
MultiChoiceField.defaultProps = defaultProps;

exports.default = MultiChoiceField;