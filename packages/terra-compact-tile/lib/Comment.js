'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includePaths = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Display = require('./Display');

var _Display2 = _interopRequireDefault(_Display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
  _inherits(Comment, _React$Component);

  function Comment() {
    _classCallCheck(this, Comment);

    return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
  }

  _createClass(Comment, [{
    key: 'render',
    value: function render() {
      if (!this.props || !this.props.text.length) {
        return null;
      }
      // TODO add a comment graphic
      // commentDisplay.icon = comment icon
      // const commentIcon = <TerraIcon icon_class='icon-comment'
      //                                size='text-body'
      //                                class='terra-CompactCard-comment--icon'>;

      var commentAttributes = _extends({}, this.props.attributes);
      commentAttributes.className = (0, _classnames2.default)(['terra-CompactTile-comment', commentAttributes.className]);

      return _react2.default.createElement(_Display2.default, {
        text: this.props.text,
        isTruncated: this.props.isTruncated,
        attributes: commentAttributes
      });
    }
  }]);

  return Comment;
}(_react2.default.Component);

Comment.propTypes = {
  text: _react.PropTypes.string,
  isTruncated: _react.PropTypes.bool,
  attributes: _react.PropTypes.objectOf(_react.PropTypes)
};

Comment.defaultProps = {
  isTruncated: false
};

var includePaths = exports.includePaths = _path2.default.join(__dirname, '../src/');

exports.default = Comment;