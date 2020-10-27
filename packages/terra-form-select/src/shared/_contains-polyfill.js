// Source: https://github.com/Financial-Times/polyfill-service/pull/183/files
// Needed for IE11 and IE10
if (!Node.prototype.contains) {
  Node.prototype.contains = function contains(node) {
    /* eslint-disable-next-line prefer-rest-params */
    if (!(0 in arguments)) {
      throw new TypeError('1 argument is required');
    }
    /* eslint-disable no-cond-assign */
    do {
      if (this === node) {
        return true;
      }
      /* eslint-disable-next-line no-param-reassign */
    } while (node = node && node.parentNode);
    return false;
  /* eslint-enable no-cond-assign */
  };
}
