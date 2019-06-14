import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Select extends React.Component {
  render() {
    const {
      ...customProps
    } = this.props;

    return (
      <select
        {...customProps}
      />
    );
  }
}

Select.isSelect = true;

export default Select;
