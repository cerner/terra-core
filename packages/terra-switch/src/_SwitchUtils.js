/**
 * Resets focus styles for the slider button on blur.
 */
const restoreFocusStyles = (sliderButton) => sliderButton.setAttribute('data-terra-switch-show-focus-styles', 'true');

/**
 * Enables focus styles for the slider button. used to enable focus on keyboard events for switch.
 */
const enableFocusStyles = (sliderButton) => restoreFocusStyles(sliderButton);

/**
 * Disables focus styles for the slider button. used to disable focus on mouse events for switch.
 */
const removeFocusStyles = (sliderButton) => sliderButton.setAttribute('data-terra-switch-show-focus-styles', 'false');

export {
  enableFocusStyles,
  removeFocusStyles,
  restoreFocusStyles,
};
