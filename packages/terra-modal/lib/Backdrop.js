"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Allow closing modal by clicking modal backdrop
   */
  canCloseOnBackdropClick: _react.PropTypes.bool,
  /**
   * Callback function for closing the modal
   */
  onRequestClose: _react.PropTypes.func
};

var defaultProps = {
  canCloseOnBackdropClick: true
};

var Backdrop = function Backdrop(props) {
  return _react2.default.createElement("button", {
    title: "terra-modal-backdrop",
    className: "terra-Modal-backdrop",
    onClick: props.onRequestClose,
    disabled: !props.canCloseOnBackdropClick
  });
};

Backdrop.propTypes = propTypes;
Backdrop.defaultProps = defaultProps;

exports.default = Backdrop;