import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */

const propTypes = {
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
};

const NativeOptGroupsProps = () => (
  <div />
);

NativeOptGroupsProps.propTypes = propTypes;

export default NativeOptGroupsProps;
