'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A container is a DOM node in the document. A container can have multiple overlays mounted on it.
 * A page can have multiple containers.
 * OverlayManager manages the relation between containers and overlays.
 * OverlayManager maintains a Map object.
 * Each unique container is registered as a key in the map. Its value is a Set object containing overlays mounted on it.
 * Current feature:
 * - If any overlay is open, disable the scrolling of its corresponding container.
 */

var OverlayManager = function () {
  function OverlayManager() {
    _classCallCheck(this, OverlayManager);
  }

  _createClass(OverlayManager, [{
    key: 'add',
    value: function add(overlay, container) {
      this.containers = this.containers || new Map();
      var overlays = this.containers.get(container);
      if (overlays === undefined) {
        overlays = new Set();
        this.containers.set(container, overlays);
      }
      overlays.add(overlay);
      this.updateContainerStyle(container);
    }
  }, {
    key: 'remove',
    value: function remove(overlay, container) {
      var overlays = this.containers.get(container);
      if (overlays) {
        overlays.delete(overlay);
      }
      this.updateContainerStyle(container);
    }
  }, {
    key: 'updateContainerStyle',
    value: function updateContainerStyle(container) {
      var overlays = this.containers.get(container);
      if (overlays) {
        if (overlays.size > 0) {
          container.classList.add('terra-Overlay--open');
        } else {
          container.classList.remove('terra-Overlay--open');
          this.containers.delete(container);
        }
      }
    }
  }]);

  return OverlayManager;
}();

exports.default = OverlayManager;