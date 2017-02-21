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

require('./compact-tile.scss');

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
  className: _react.PropTypes.string,
  layout: _react.PropTypes.oneOf(['oneColumn', 'twoColumns']),
  textEmphasis: _react.PropTypes.oneOf(['default', 'left']),
  isTruncated: _react.PropTypes.bool,
  accessoryAlignment: _react.PropTypes.oneOf(['alignTop', 'alignCenter']),
  leftAccessory: _react.PropTypes.element,
  rightAccessory: _react.PropTypes.element,
  displays: _react.PropTypes.arrayOf(_react.PropTypes.element),
  comment: _react.PropTypes.element
};

var defaultProps = {
  className: '',
  layout: 'oneColumn',
  textEmphasis: 'default',
  isTruncated: false,
  accessoryAlignment: 'alignCenter',
  leftAccessory: undefined,
  rightAccessory: undefined,
  display: [],
  comment: undefined
};

var CompactTile = function (_React$Component) {
  _inherits(CompactTile, _React$Component);

  function CompactTile() {
    _classCallCheck(this, CompactTile);

    return _possibleConstructorReturn(this, (CompactTile.__proto__ || Object.getPrototypeOf(CompactTile)).apply(this, arguments));
  }

  _createClass(CompactTile, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          layout = _props.layout,
          textEmphasis = _props.textEmphasis,
          isTruncated = _props.isTruncated,
          accessoryAlignment = _props.accessoryAlignment,
          leftAccessory = _props.leftAccessory,
          rightAccessory = _props.rightAccessory,
          displays = _props.displays,
          comment = _props.comment,
          customProps = _objectWithoutProperties(_props, ['className', 'layout', 'textEmphasis', 'isTruncated', 'accessoryAlignment', 'leftAccessory', 'rightAccessory', 'displays', 'comment']);

      var tileClassNames = (0, _classnames2.default)(['terra-CompactTile', { 'terra-CompactTile--isTruncated': isTruncated }, _defineProperty({}, 'terra-CompactTile--' + layout, layout), _defineProperty({}, 'terra-CompactTile-accessory--' + accessoryAlignment, accessoryAlignment), className]);

      return _react2.default.createElement(
        'div',
        _extends({}, customProps, { className: tileClassNames }),
        CompactTile.renderAccessory(leftAccessory),
        _react2.default.createElement(
          'div',
          { className: 'terra-CompactTile-body' },
          CompactTile.renderRows(displays, layout, textEmphasis),
          comment
        ),
        CompactTile.renderAccessory(rightAccessory)
      );
    }
  }], [{
    key: 'renderAccessory',
    value: function renderAccessory(accessory) {
      return _react2.default.createElement(
        'div',
        { className: 'terra-CompactTile-accessory' },
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
        { className: 'terra-CompactTile-rowContainer' },
        displayGroups.map(function (group, index) {
          var row = CompactTile.renderRow(group, index, displayGroups.length, emphasis);
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
        { className: 'terra-CompactTile-row', key: rowKey },
        row.map(function (display, contentIndex) {
          var contentKey = contentIndex;
          var contentClasses = CompactTile.classesForContent(rowIndex, rowCount, contentIndex, emphasis);
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
        classes = CompactTile.leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
      } else {
        classes = CompactTile.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
      }
      return ['terra-CompactTile-content'].concat(classes).join(' ');
    }
  }, {
    key: 'defaultEmphasisContentClassesFromIndexes',
    value: function defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount) {
      var contentSize = 'terra-CompactTile-content--primarySize';
      var contentColor = 'terra-CompactTile-content--primaryColor';

      if (rowIndex > 0) {
        contentSize = 'terra-CompactTile-content--secondarySize';
      }

      if (rowCount === 2 && rowIndex === 1) {
        contentColor = 'terra-CompactTile-content--secondaryColor';
      }

      if (rowIndex >= 2) {
        contentColor = 'terra-CompactTile-content--secondaryColor';
      }

      return [contentSize, contentColor];
    }
  }, {
    key: 'leftEmphasisContentClassesFromIndexes',
    value: function leftEmphasisContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
      if (contentIndex === 1) {
        return ['terra-CompactTile-content--secondarySize', 'terra-CompactTile-content--secondaryColor'];
      }

      return CompactTile.defaultEmphasisContentClassesFromIndexes(rowIndex, rowCount);
    }
  }]);

  return CompactTile;
}(_react2.default.Component);

CompactTile.propTypes = propTypes;
CompactTile.defaultProps = defaultProps;
CompactTile.Display = _Display2.default;
CompactTile.Comment = _Comment2.default;

exports.default = CompactTile;