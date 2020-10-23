// Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
// Needed for IE11 and IE10
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
