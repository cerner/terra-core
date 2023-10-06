// Source: https://www.npmjs.com/package/element-closest-polyfill
// Needed for IE support since consuming team still needs to support IE.
if (typeof Element !== 'undefined') {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function closest(selector) {
      let el = this;
      do {
        if (el.matches(selector)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }
}
