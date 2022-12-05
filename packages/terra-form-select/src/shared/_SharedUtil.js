class SharedUtil {
  /**
   * Util to determine if the user agent indicates that the browser is Safari
   * @return {boolean}
   */
  static isSafari() {
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      return true;
    }

    return false;
  }

  static isMac() {
    if (navigator.userAgent.indexOf('Mac') !== -1 && navigator.userAgent.indexOf('Win') === -1) {
      return true;
    }

    return false;
  }
}

export default SharedUtil;
