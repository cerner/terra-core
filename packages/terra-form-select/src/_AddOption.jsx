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
      return new Error('Please add locale prop to Base component to load translations');
    }
  },
};

const AddOption = ({ value, ...customProps }, context) => (
  <Option
    {...customProps}
    isAddOption
    value={value}
    display={context.intl.formatMessage({ id: 'Terra.form.select.add' }, { text: value })}
  />
);

AddOption.propTypes = propTypes;
AddOption.contextTypes = contextTypes;
AddOption.isOption = true;

export default AddOption;
