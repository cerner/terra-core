import React from 'react';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';

const propTypes = {
  /**
     * The content of the dropdown.
  */
  children: PropTypes.node,
};

const defaultProps = {
  children: undefined,
};

const Box = props =>
  (
    <Portal node={document && document.getElementById('box')}>
      {props.children}
    </Portal>
  );

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
