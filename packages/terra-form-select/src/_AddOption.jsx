import React from 'react';
import PropTypes from 'prop-types';
import Option from './_Option';

const propTypes = {
  /**
   * The value of the option.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

const AddOption = ({ value, ...customProps }, context) => (
  <Option
    {...customProps}
    isAddOption
    value={value}
    display={context.intl.formatMessage({ id: 'Terra.form.select.add' }, { text: value })}
    data-terra-select-add-option
  />
);

AddOption.propTypes = propTypes;
AddOption.contextTypes = contextTypes;
AddOption.isOption = true;

export default AddOption;
