import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Input extends React.Component {
  render() {
    const {
      isInvalid,
      ...customProps
    } = this.props;

    return (
      <input
        invalid={isInvalid && 'true'}
        {...customProps}
      />
    );
  }
}

Input.propTypes = { isInvalid: PropTypes.bool };
Input.isInput = true;

export default Input;
