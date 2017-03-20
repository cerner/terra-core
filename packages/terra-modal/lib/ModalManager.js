'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ModalManager is used for monitoring the enter and exit of multiple modals on the same page.
 * Current feature:
 * - If any modal is open, disable the scrolling of background by updating the style of <body/>.
 */
var ModalManager = function () {
  function ModalManager() {
    (0, _classCallCheck3.default)(this, ModalManager);

    this.modals = new _set2.default();
  }

  (0, _createClass3.default)(ModalManager, [{
    key: 'add',
    value: function add(modal) {
      this.modals.add(modal);
      this.updateBodyStyle();
    }
  }, {
    key: 'remove',
    value: function remove(modal) {
      this.modals.delete(modal);
      this.updateBodyStyle();
    }
  }, {
    key: 'updateBodyStyle',
    value: function updateBodyStyle() {
      if (this.modals.size) {
        document.body.classList.add('terra-Modal--open');
      } else {
        document.body.classList.remove('terra-Modal--open');
      }
    }
  }]);
  return ModalManager;
}();

exports.default = ModalManager;