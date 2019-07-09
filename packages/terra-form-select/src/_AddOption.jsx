import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Option from './_Option';

const propTypes = {
  /**
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * The value of the option.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const AddOption = ({ intl, value, ...customProps }) => (
  <Option
    {...customProps}
    isAddOption
    value={value}
    display={intl.formatMessage({ id: 'Terra.form.select.add' }, { text: value })}
    data-terra-select-add-option
  />
);

AddOption.propTypes = propTypes;
AddOption.isOption = true;

export default injectIntl(AddOption);
