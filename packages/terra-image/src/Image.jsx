import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Image.scss';

const propTypes = {
  /**
  *
  */
  src: PropTypes.string.isRequired,
  /**
   *
   */
  variant: PropTypes.oneOf(['default', 'rounded', 'circle', 'thumbnail']),
  /**
   *
   */
  behavior: PropTypes.oneOf(['fluid', 'nonfluid']),
  /**
   *
   */
  alt: PropTypes.string,
  /**
   *
   */
  height: PropTypes.number,
  /**
   *
   */
  width: PropTypes.number,
};

const defaultProps = {
  variant: 'default',
  behavior: 'nonfluid',
  alt: ' ',
};

const Image = ({
  src,
  variant,
  isFluid,
  alt,
  height,
  width,
  ...customProps
}) => {
  const classes = classNames([
  	'terra-Image',
  	{[`terra-Image--${variant}`]: variant },
  	{[`terra-Image--${behavior}`]: behavior},
  	customProps.className
  ]);

  return (
    <img {...customProps}
    className={classes}
  	/>);
  // React.createNewElement('img', {...customProps, className: classes } );
};


Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
