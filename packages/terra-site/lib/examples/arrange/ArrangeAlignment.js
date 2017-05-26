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

var _terraArrange = require('terra-arrange');

var _terraArrange2 = _interopRequireDefault(_terraArrange);

var _examplesetup = require('./examplesetup');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var alignmentTypes = ['all', 'individual'];

var propTypes = {
  /**
   * Alignment behavior.
   * This is used to determine which form to load to change alignment in the examples
   */
  alignment: _propTypes2.default.oneOf(alignmentTypes).isRequired,
  /**
   * The content to display in the body of the fitStart
   * This is passed on to the arrange component
   */
  fitStart: _propTypes2.default.element,
  /**
   * The content to display in the body of the fill
   * This is passed on to the arrange component
   */
  fill: _propTypes2.default.element.isRequired,
  /**
   * The content to display in the body of the fitEnd
   * This is passed on to the arrange component
   */
  fitEnd: _propTypes2.default.element
};

var ArrangeAlignment = function (_React$Component) {
  _inherits(ArrangeAlignment, _React$Component);

  function ArrangeAlignment(props) {
    _classCallCheck(this, ArrangeAlignment);

    var _this = _possibleConstructorReturn(this, (ArrangeAlignment.__proto__ || Object.getPrototypeOf(ArrangeAlignment)).call(this, props));

    _this.state = {
      id: Math.floor(Math.random() * 0xFFFF)
    };
    _this.getId = _this.getId.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    return _this;
  }

  _createClass(ArrangeAlignment, [{
    key: 'getId',
    value: function getId(name) {
      return name + this.state.id;
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: 'renderAllAlignmentForm',
    value: function renderAllAlignmentForm() {
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: this.getId('align') },
          _examplesetup.alignLabels.overall
        ),
        _react2.default.createElement(
          'select',
          { id: this.getId('align'), name: 'align', value: this.state.align, onChange: this.handleSelectChange },
          _react2.default.createElement(
            'option',
            { value: '' },
            'default'
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.center },
            _examplesetup.alignOptions.center
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.bottom },
            _examplesetup.alignOptions.bottom
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.stretch },
            _examplesetup.alignOptions.stretch
          )
        )
      );
    }
  }, {
    key: 'renderIndividualAlignmentForm',
    value: function renderIndividualAlignmentForm() {
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: this.getId('alignFitStart') },
          _examplesetup.alignLabels.alignFitStart
        ),
        _react2.default.createElement(
          'select',
          { id: this.getId('alignFitStart'), name: 'alignFitStart', value: this.state.alignFitStart, onChange: this.handleSelectChange },
          _react2.default.createElement(
            'option',
            { value: '' },
            'default'
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.center },
            _examplesetup.alignOptions.center
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.bottom },
            _examplesetup.alignOptions.bottom
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.stretch },
            _examplesetup.alignOptions.stretch
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'label',
          { htmlFor: this.getId('alignFill') },
          _examplesetup.alignLabels.alignFill
        ),
        _react2.default.createElement(
          'select',
          { id: this.getId('alignFill'), name: 'alignFill', value: this.state.alignFill, onChange: this.handleSelectChange },
          _react2.default.createElement(
            'option',
            { value: '' },
            'Default'
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.center },
            _examplesetup.alignOptions.center
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.bottom },
            _examplesetup.alignOptions.bottom
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.stretch },
            _examplesetup.alignOptions.stretch
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'label',
          { htmlFor: this.getId('alignFitEnd') },
          _examplesetup.alignLabels.alignFitEnd
        ),
        _react2.default.createElement(
          'select',
          { id: this.getId('alignFitEnd'), name: 'alignFitEnd', value: this.state.alignFitEnd, onChange: this.handleSelectChange },
          _react2.default.createElement(
            'option',
            { value: '' },
            'Default'
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.center },
            _examplesetup.alignOptions.center
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.bottom },
            _examplesetup.alignOptions.bottom
          ),
          _react2.default.createElement(
            'option',
            { value: _examplesetup.alignOptions.stretch },
            _examplesetup.alignOptions.stretch
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var allAlignmentForm = this.renderAllAlignmentForm();
      var individualAlignmentForm = this.renderIndividualAlignmentForm();

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _examplesetup.ArrangeWrapper,
          null,
          _react2.default.createElement(_terraArrange2.default, _extends({
            fitStart: this.props.fitStart,
            fill: this.props.fill,
            fitEnd: this.props.fitEnd
          }, this.state.align && { align: this.state.align }, this.state.alignFitStart && { alignFitStart: this.state.alignFitStart }, this.state.alignFill && { alignFill: this.state.alignFill }, this.state.alignFitEnd && { alignFitEnd: this.state.alignFitEnd }))
        ),
        _react2.default.createElement('br', null),
        this.props.alignment === 'individual' && individualAlignmentForm,
        this.props.alignment === 'all' && allAlignmentForm
      );
    }
  }]);

  return ArrangeAlignment;
}(_react2.default.Component);

ArrangeAlignment.propTypes = propTypes;

exports.default = ArrangeAlignment;