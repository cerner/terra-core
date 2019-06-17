import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Textarea extends React.Component {
  render() {
    const {
      ...customProps
    } = this.props;

    return (
      <textarea
        {...customProps}
      />
    );
  }
}

Textarea.isTextarea = true;

export default Textarea;
