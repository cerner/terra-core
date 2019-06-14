import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Input extends React.Component {
  render() {
    const {
      ...customProps
    } = this.props;

    return (
      <input
        {...customProps}
      />
    );
  }
}

Input.isInput = true;

export default Input;
