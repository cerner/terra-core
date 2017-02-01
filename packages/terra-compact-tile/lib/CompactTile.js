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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Display from './Display';
// import Comment from './Comment';

var CompactTile = function (_React$Component) {
  _inherits(CompactTile, _React$Component);

  function CompactTile() {
    _classCallCheck(this, CompactTile);

    return _possibleConstructorReturn(this, (CompactTile.__proto__ || Object.getPrototypeOf(CompactTile)).apply(this, arguments));
  }

  _createClass(CompactTile, [{
    key: 'render',
    value: function render() {
      var tileClasses = CompactTile.classesForTileFromProps(this.props.layout, this.props.theme, this.props.accessoryAlignment, this.props.isTruncated);

      var tileAttributes = _extends({}, this.props.attributes);
      tileAttributes.className = (0, _classnames2.default)([tileClasses, tileAttributes.className]);

      return _react2.default.createElement(
        'div',
        tileAttributes,
        CompactTile.renderAccessory(this.props.leftAccessory),
        _react2.default.createElement(
          'div',
          { className: 'terra-CompactTile-body' },
          CompactTile.renderRows(this.props.displays, this.props.layout, this.props.theme),
          this.props.comment
        ),
        CompactTile.renderAccessory(this.props.rightAccessory)
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
    value: function renderRows(displays, layout, theme) {
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
          var row = CompactTile.renderRow(group, index, displayGroups.length, theme);
          return row;
        })
      );
    }
  }, {
    key: 'renderRow',
    value: function renderRow(row, rowIndex, rowCount, theme) {
      var rowKey = rowIndex;
      return _react2.default.createElement(
        'div',
        { className: 'terra-CompactTile-row', key: rowKey },
        row.map(function (display, contentIndex) {
          var contentKey = contentIndex;
          var contentClasses = CompactTile.classesForContent(rowIndex, rowCount, contentIndex, theme);
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
    value: function classesForContent(rowIndex, rowCount, contentIndex, theme) {
      var classes = void 0;
      if (theme === 'leftEmphasisTheme') {
        classes = CompactTile.leftThemeContentClassesFromIndexes(rowIndex, rowCount, contentIndex);
      } else {
        classes = CompactTile.defaultThemeContentClassesFromIndexes(rowIndex, rowCount);
      }
      return ['terra-CompactTile-content'].concat(classes).join(' ');
    }
  }, {
    key: 'defaultThemeContentClassesFromIndexes',
    value: function defaultThemeContentClassesFromIndexes(rowIndex, rowCount) {
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
    key: 'leftThemeContentClassesFromIndexes',
    value: function leftThemeContentClassesFromIndexes(rowIndex, rowCount, contentIndex) {
      if (contentIndex === 1) {
        return ['terra-CompactTile-content--secondarySize', 'terra-CompactTile-content--secondaryColor'];
      }

      return CompactTile.defaultThemeContentClassesFromIndexes(rowIndex, rowCount);
    }
  }, {
    key: 'classesForTileFromProps',
    value: function classesForTileFromProps(layout, theme, alignment, truncated) {
      return (0, _classnames2.default)(['terra-CompactTile', { 'terra-CompactTile--isTruncated': truncated }, _defineProperty({}, 'terra-CompactTile--' + layout, layout), _defineProperty({}, 'terra-CompactTile--' + theme, theme), _defineProperty({}, 'terra-CompactTile-accessory--' + alignment, alignment)]);
    }
  }]);

  return CompactTile;
}(_react2.default.Component);

exports.default = CompactTile;


CompactTile.defaultProps = {
  layout: 'oneColumn',
  theme: 'defaultTheme',
  isTruncated: false,
  accessoryAlignment: 'alignCenter'
};

CompactTile.propTypes = {
  layout: _react.PropTypes.oneOf(['oneColumn', 'twoColumns']),
  theme: _react.PropTypes.oneOf(['defaultTheme', 'leftEmphasisTheme']),
  isTruncated: _react.PropTypes.bool,
  accessoryAlignment: _react.PropTypes.oneOf(['alignTop', 'alignCenter']),
  leftAccessory: _react.PropTypes.element,
  rightAccessory: _react.PropTypes.element,
  displays: _react.PropTypes.arrayOf(_react.PropTypes.element),
  comment: _react.PropTypes.element,
  attributes: _react.PropTypes.oneOfType([_react.PropTypes.object])
};