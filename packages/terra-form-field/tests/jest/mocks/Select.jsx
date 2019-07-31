import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Select extends React.Component {
  render() {
    const {
      isInvalid,
      ...customProps
    } = this.props;

    return (
      <select
        invalid={isInvalid && 'true'}
        {...customProps}
      />
    );
  }
}

Select.propTypes = { isInvalid: PropTypes.bool };
Select.isSelect = true;

export default Select;
