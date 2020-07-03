/**
 * Resets focus styles for the slider button.
 */
const restoreFocusStyles = (sliderButton) => sliderButton.setAttribute('data-terra-switch-show-focus-styles', 'true');

/**
 * Disables focus styles for the slider button. used to disable focus on mouse events for switch.
 */
const removeFocusStyles = (sliderButton) => sliderButton.setAttribute('data-terra-switch-show-focus-styles', 'false');

export {
  removeFocusStyles,
  restoreFocusStyles,
};
