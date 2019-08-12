import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../common/Avatar.module.scss';
import {
  AVATAR_VARIANTS, generateImagePlaceholder, generateImage, setColor,
} from '../common/AvatarUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Specifies the alternative text for the image.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Sets the background color. Defaults to `auto`. Accepted color variants are theme specific.
   * One of: `'auto'`, `'neutral'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'`, `'ten'`.
   */
  color: PropTypes.oneOf(['auto', 'neutral', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten']),
  /**
   * Value used for the hash function when color is set to `auto`. If not provided, hash function utilizes alt.
   */
  hashValue: PropTypes.string,
  /**
   * The image to display.
   */
  image: PropTypes.string,
  /**
   * Whether to hide avatar from the accessiblity tree.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Overrides the default size.
   */
  size: PropTypes.string,
};

const defaultProps = {
  color: 'auto',
  hashValue: undefined,
  image: undefined,
  isAriaHidden: false,
  size: undefined,
};

class Facility extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fallback: false,
    };

    this.handleFallback = this.handleFallback.bind(this);
  }

  handleFallback() {
    this.setState({ fallback: true });
  }

  render() {
    const {
      alt,
      color,
      hashValue,
      image,
      isAriaHidden,
      size,
      ...customProps
    } = this.props;

    let facilityContent;

    if (image) {
      facilityContent = generateImage(image, alt, isAriaHidden, AVATAR_VARIANTS.FACILITY, this.handleFallback);
    } else {
      facilityContent = generateImagePlaceholder(alt, isAriaHidden, AVATAR_VARIANTS.FACILITY);
    }
    const attributes = { ...customProps };
    const customStyles = size ? ({ fontSize: size, ...attributes.style }) : attributes.style;
    const facilityClassNames = cx([
      'avatar',
      setColor(alt, color, hashValue),
      { 'fallback-icon': this.state.fallback },
      { image: Boolean(image) },
      attributes.className,
    ]);

    return (
      <div {...attributes} className={facilityClassNames} style={customStyles}>
        {facilityContent}
      </div>
    );
  }
}

Facility.propTypes = propTypes;
Facility.defaultProps = defaultProps;

export default Facility;
