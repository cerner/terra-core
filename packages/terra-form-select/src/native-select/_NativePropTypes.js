import PropTypes from 'prop-types';

/**
 * NOTE: Changes to this file should be mirrored in the `terra-dev-site/doc/example/propTypes` folder
 */

const optionPropType = PropTypes.shape({
  /**
   * The option display.
   */
  display: PropTypes.string.isRequired,
  /**
   * Whether the option is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The option value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
});

const optGroupPropType = PropTypes.shape({
  /**
   * The option display.
   */
  display: PropTypes.string.isRequired,
  /**
   * Whether the optgroup is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The array of select options.
   */
  options: PropTypes.arrayOf(optionPropType).isRequired,
});

export default {
  optionPropType,
  optGroupPropType,
};

export {
  optionPropType,
  optGroupPropType,
};
