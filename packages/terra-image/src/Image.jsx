import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './Image.scss';

const propTypes = {
  /**
   * The source for the image which will be displayed.
   */
  src: PropTypes.string.isRequired,
  /**
   * Sets the style of the image from the following values; `default`, `rounded`, `circle`, `thumbnail`. 
   */
  variant: PropTypes.oneOf(['default', 'rounded', 'circle', 'thumbnail']),
  /**
   * Sets the behavior for the image, which can be `fluid` or `nonfluid`.
   */
  behavior: PropTypes.oneOf(['fluid', 'nonfluid']),
  /**
   * The text content that specifies an alternative text for an image.
   */
  alt: PropTypes.string,
  /**
   * Sets the height of the image.
   */
  height: PropTypes.number,
  /**
   * Sets the width of the image.
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
  	customProps.className,
  ]);

  return (
    <img {...customProps}
    className={classes}
  	/>);
   
   /* React.createNewElement('img', {...customProps, className: classes } );*/
};


Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
