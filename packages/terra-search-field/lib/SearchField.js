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

require('terra-base/lib/baseStyles');

var _terraButton = require('terra-button');

var _terraButton2 = _interopRequireDefault(_terraButton);

var _IconSearch = require('terra-icon/lib/icon/IconSearch');

var _IconSearch2 = _interopRequireDefault(_IconSearch);

require('./SearchField.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * Placeholder text to show while the search field is empty.
   */
  placeholder: _propTypes2.default.string,

  /**
   * The minimum number of characters to perform a search.
   */
  minimumSearchTextLength: _propTypes2.default.number,

  /**
   * How long the component should wait after input before performing an automatic search.
   */
  searchDelay: _propTypes2.default.number,

  /**
   * A callback to perform search. Sends parameter {String} searchText.
   */
  onSearch: _propTypes2.default.func
};

var defaultProps = {
  placeholder: '',
  minimumSearchTextLength: 2,
  searchDelay: 250
};

var SearchField = function (_React$Component) {
  _inherits(SearchField, _React$Component);

  function SearchField(props) {
    _classCallCheck(this, SearchField);

    var _this = _possibleConstructorReturn(this, (SearchField.__proto__ || Object.getPrototypeOf(SearchField)).call(this, props));

    _this.handleTextChange = _this.handleTextChange.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);

    _this.searchTimeout = null;
    _this.state = {
      searchText: ''
    };
    return _this;
  }

  _createClass(SearchField, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearSearchTimeout();
    }
  }, {
    key: 'handleTextChange',
    value: function handleTextChange(event) {
      this.setState({ searchText: event.target.value });

      if (!this.searchTimeout) {
        this.searchTimeout = setTimeout(this.handleSearch, this.props.searchDelay);
      }
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch() {
      this.clearSearchTimeout();

      if (this.state.searchText.length >= this.props.minimumSearchTextLength && this.props.onSearch) {
        this.props.onSearch(this.state.searchText);
      }
    }
  }, {
    key: 'clearSearchTimeout',
    value: function clearSearchTimeout() {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          placeholder = _props.placeholder,
          customProps = _objectWithoutProperties(_props, ['placeholder']);

      var searchFieldClassNames = (0, _classnames2.default)(['terra-SearchField', customProps.className]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: searchFieldClassNames }),
        _react2.default.createElement('input', { className: 'terra-SearchField-input', type: 'search', placeholder: placeholder, value: this.state.searchText, onChange: this.handleTextChange }),
        _react2.default.createElement(
          _terraButton2.default,
          { className: 'terra-SearchField-button', onClick: this.handleSearch },
          _react2.default.createElement(_IconSearch2.default, null)
        )
      );
    }
  }]);

  return SearchField;
}(_react2.default.Component);

SearchField.propTypes = propTypes;
SearchField.defaultProps = defaultProps;

exports.default = SearchField;