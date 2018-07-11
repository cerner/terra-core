import React from 'react';
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
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
