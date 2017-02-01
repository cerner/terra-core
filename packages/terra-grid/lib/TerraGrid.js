'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../src/terra-grid.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // For stateless components, use a functional component
// For stateful components, use a class

// https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this));

    _this.state = {
      isSelected: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Grid, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ isSelected: !this.state.isSelected });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)(['terra-Grid', this.props.variant, this.state.isSelected && 'u-selected']);

      if (!this.props.name) {
        return null;
      }
      if (!this.props.variant) {
        return null;
      }
      return _react2.default.createElement(
        'button',
        {
          className: classes,
          onClick: this.handleClick
        },
        'Terra, ',
        this.props.name
      );
    }
  }]);

  return Grid;
}(_react2.default.Component);

Grid.propTypes = {
  name: _react.PropTypes.string.isRequired,
  variant: _react.PropTypes.string.isRequired
};

Grid.defaultProps = {
  name: 'default',
  variant: 'terra-Grid--default'
};

exports.default = Grid;