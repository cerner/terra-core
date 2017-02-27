'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ModalManager is used for monitoring the enter and exit of multiple modals on the same page.
 * Current feature:
 * - If any modal is open, disable the scrolling of background by updating the style of <body/>.
 */
var ModalManager = function () {
  function ModalManager() {
    _classCallCheck(this, ModalManager);

    this.modals = new Set();
  }

  _createClass(ModalManager, [{
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