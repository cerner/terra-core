import React from 'react';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';

const propTypes = {
  /**
     * The content of the dropdown.
  */
  children: PropTypes.node,
  /**
     * Callback function triggered when the dropdown resizes.
  */
  onResize: PropTypes.func,
  /**
     * Callback function triggered for setting a ref to the dropdown.
  */
  refCallback: PropTypes.func,
  /**
     * The attachment target.
  */
  target: PropTypes.object,
};

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Portal node={document && document.getElementById('box')}>
        {this.props.children}
      </Portal>
    );
  }
}

Box.propTypes = propTypes;

export default Box;
