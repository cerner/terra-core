import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
/**
 * Enables focus styles for the slider button. used to enable focus on keyboard events for switch.
 */
const enableFocusStyles = (event) => {
  if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
    event.currentTarget.querySelector('button').setAttribute('data-focus-styles-enabled', 'true');
  }
};

/**
 * Disables focus styles for the slider button. used to disable focus on mouse events for switch.
 */
const disableFocusStyles = (event) => {
  event.preventDefault(); // prevents onBlur from getting triggered on label click.
  event.currentTarget.querySelector('button').setAttribute('data-focus-styles-enabled', 'false');
};

export {
  enableFocusStyles,
  disableFocusStyles,
};
