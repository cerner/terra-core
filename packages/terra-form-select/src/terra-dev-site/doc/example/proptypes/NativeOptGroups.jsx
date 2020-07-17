import React from 'react';
import PropTypes from 'prop-types';
import { optionPropType } from '../../../../native-select/NativePropTypes';

/* eslint-disable react/no-unused-prop-types */

const propTypes = {
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
};

const NativeOptionsProps = () => (
  <div />
);

NativeOptionsProps.propTypes = propTypes;

export default NativeOptionsProps;
