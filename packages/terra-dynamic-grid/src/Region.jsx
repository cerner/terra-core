
import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';

const Region = props => (
  (<div data-region-name={props.name} className={css(props.styles)}>
    {props.children}
  </div>)
);

Region.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  styles: PropTypes.arrayOf(PropTypes.object),
};

export default Region;
