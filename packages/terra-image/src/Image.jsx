import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Image.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
};

const defaultProps = {
  name: 'default',
  variant: 'terra-Image--default',
};

const Image = (props) => (
  <div />
);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
