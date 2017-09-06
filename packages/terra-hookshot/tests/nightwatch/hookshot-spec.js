/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  // minimum props

  // attachementBehavior: validate 'none', 'auto', and 'mirror' behaviors.
    // fallback patterns:    
    // none: valid primary position, pushed by bounds
    // mirror: valid primary position, valid 180 degree, pushed by bounds
    // auto: valid primary position, valid 180 degree, valid 90 degree, valid -90 degree, pushed by bounds

  // attachmentMargin: validate number set adjusts positioning by so much.

  // boundingRef: test - top bottom left right bounding container adjustments as well as window.

  // contentAttachment and targetAttachment combinations, 81 combinations...

  // contentOffset and targetOffset, verify x and y manipulations affect position.

  // isEnabled, verify positioning does and doesn't not occur.

  // isOpen, verify content is present on the dom.
});
