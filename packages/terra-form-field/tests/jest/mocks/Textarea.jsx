import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Textarea extends React.Component {
  render() {
    const {
      isInvalid,
      ...customProps
    } = this.props;

    return (
      <textarea
        invalid={isInvalid && 'true'}
        {...customProps}
      />
    );
  }
}

Textarea.propTypes = { isInvalid: PropTypes.bool };
Textarea.isTextarea = true;

export default Textarea;
