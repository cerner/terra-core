import PropTypes from 'prop-types';

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
  value: PropTypes.string.isRequired,
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
  childOptions: PropTypes.arrayOf(optionPropType).isRequired,
});

export default {
  optionPropType,
  optGroupPropType,
};

export {
  optionPropType,
  optGroupPropType,
};