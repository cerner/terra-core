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

require('./CompactCard.scss');

var _Display = require('./Display');

var _Display2 = _interopRequireDefault(_Display);

var _Comment = require('./Comment');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * The column layout in which to present the displays.
   */
  layout: _react.PropTypes.oneOf(['oneColumn', 'twoColumns']),
  /**
   * The text color emphasis when using two columns.
   */
  textEmphasis: _react.PropTypes.oneOf(['default', 'left']),
  /**
   * Whether or not all text on the card should be truncated.
   */
  isTruncated: _react.PropTypes.bool,
  /**
   * The vertical alignment of the left and right accesories.
   */
  accessoryAlignment: _react.PropTypes.oneOf(['alignTop', 'alignCenter']),
  /**
   * The react element to be placed in the left accessory position.
   */
  leftAccessory: _react.PropTypes.element,
  /**
   * The react element to be placed in the right accessory position.
   */
  rightAccessory: _react.PropTypes.element,
  /**
   * An array of react display elements to be presented.
   */
  displays: _react.PropTypes.arrayOf(_react.PropTypes.element),
  /**
   * THe react element for the comment element.
   */
  comment: _react.PropTypes.element
};

var defaultProps = {
  layout: 'oneColumn',
  textEmphasis: 'default',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
  leftAccessory: undefined,
  rightAccessory: undefined,
  display: [],
  comment: undefined
};

var CompactCard = function (_React$Component) {
  _inherits(CompactCard, _React$Component);

  function CompactCard() {
    _classCallCheck(this, CompactCard);

    return _possibleConstructorReturn(this, (CompactCard.__proto__ || Object.getPrototypeOf(CompactCard)).apply(this, arguments));
  }

  _createClass(CompactCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          layout = _props.layout,
          textEmphasis = _props.textEmphasis,
          isTruncated = _props.isTruncated,
          accessoryAlignment = _props.accessoryAlignment,
          leftAccessory = _props.leftAccessory,
          rightAccessory = _props.rightAccessory,
          displays = _props.displays,
          comment = _props.comment,
          customProps = _objectWithoutProperties(_props, ['layout', 'textEmphasis', 'isTruncated', 'accessoryAlignment', 'leftAccessory', 'rightAccessory', 'displays', 'comment']);

      var cardClassNames = (0, _classnames2.default)(['terra-CompactCard', { 'terra-CompactCard--isTruncated': isTruncated }, _defineProperty({}, 'terra-CompactCard--' + layout, layout), _defineProperty({}, 'terra-CompactCard-accessory--' + accessoryAlignment, accessoryAlignment), customProps.className]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: cardClassNames }),
        CompactCard.renderAccessory(leftAccessory),
        _react2.default.createElement(
          'div',
          { className: 'terra-CompactCard-body' },
          CompactCard.renderRows(displays, layout, textEmphasis),
          comment
        ),
        CompactCard.renderAccessory(rightAccessory)
      );
    }
  }], [{
    key: 'renderAccessory',
    value: function renderAccessory(accessory) {
      return _react2.default.createElement(
        'div',
        { className: 'terra-CompactCard-accessory' },
        accessory
      );
    }
  }, {
    key: 'renderRows',
    value: function renderRows(displays, layout, emphasis) {
      if (displays === null || displays === undefined || !displays.length) {
        return undefined;
      }

      var displaysSlice = displays.slice(0, 7);
      var sliceValue = 1;
      if (layout === 'twoColumns') {
        sliceValue = 2;
      }

      var displayGroups = [];
      var displayGroup = [];
      var sliceLength = displaysSlice.length;
      for (var i = 0; i < sliceLength; i += 1) {
        displayGroup.push(displaysSlice[i]);

        if ((i + 1) % sliceValue === 0) {
          displayGroups.push(displayGroup);
          displayGroup = [];
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'terra-CompactCard-rowContainer' },
        displayGroups.map(function (group, index) {
          var row = CompactCard.renderRow(group, index, displayGroups.length, emphasis);
          return row;
        })
      );
    }
  }, {
    key: 'renderRow',
    value: function renderRow(row, rowIndex, rowCount, emphasis) {
      var rowKey = rowIndex;
      return _react2.default.createElement(
        'div',
        { className: 'terra-CompactCard-row', key: rowKey },
        row.map(function (display, contentIndex) {
          var contentKey = contentIndex;
          var contentClasses = CompactCard.classesForContent(rowIndex, rowCount, contentIndex, emphasis);
          return _react2.default.createElement(
            'div',
            _extends({ className: contentClasses }, { key: contentKey }),
            display
          );
        })
      );
    }
  }, {
    key: 'classesForContent',
    value: function classesForContent(rowIndex, rowCount, contentIndex, emphasis) {
      var classes = void 0;
      if (emphasis === 'left') {
        classes = CompactCard.leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
      } else {
        classes = CompactCard.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
      }
      return ['terra-CompactCard-content'].concat(classes).join(' ');
    }
  }, {
    key: 'defaultEmphasisContentClassesFromIndexes',
    value: function defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
      var contentSize = 'terra-CompactCard-content--primarySize';
      var contentColor = 'terra-CompactCard-content--primaryColor';

      if (rowIndex > 0) {
        contentSize = 'terra-CompactCard-content--secondarySize';
      }

      if (rowCount === 2 && rowIndex === 1) {
        contentColor = 'terra-CompactCard-content--secondaryColor';
      }

      if (rowIndex >= 2) {
        contentColor = 'terra-CompactCard-content--secondaryColor';
      }

      return [contentSize, contentColor];
    }
  }, {
    key: 'leftEmphasisContentClassesFromIndexes',
    value: function leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
      if (contentIndex === 1) {
        return ['terra-CompactCard-content--secondarySize', 'terra-CompactCard-content--secondaryColor'];
      }

      return CompactCard.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
    }
  }]);

  return CompactCard;
}(_react2.default.Component);

CompactCard.propTypes = propTypes;
CompactCard.defaultProps = defaultProps;
CompactCard.Display = _Display2.default;
CompactCard.Comment = _Comment2.default;

exports.default = CompactCard;