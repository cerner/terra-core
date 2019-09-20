/**
 * @desc Determine if the browser is ran on a mobile device
 *
 * @returns true if mobile (includes tablets), else false
 *
 * On the userAgent check against "Mobi", quoting MDN:
 * > In summary, we recommend looking for the string “Mobi” anywhere in the
 * > User Agent to detect a mobile device
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Mobile_Tablet_or_Desktop
 *
 * We also need to ensure that touch events are present in the window, since our
 * assumption is that mobile uses touch as the primary interface
 */
export default function isMobile() {
  return /Mobi/.test(navigator.userAgent) && 'ontouchstart' in window;
}
