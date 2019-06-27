import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import objectFitImages from 'object-fit-images'; // Adding polyfill for IE.
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
   * One or two letters to display.
   */
  initials: PropTypes.string,
  /**
   * Whether to hide avatar from the accessiblity tree.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Whether the person is deceased. Overrides any color variant.
   */
  isDeceased: PropTypes.bool,
  /**
   * Overrides the default size.
   */
  size: PropTypes.string,
};

const defaultProps = {
  color: 'auto',
  hashValue: undefined,
  image: undefined,
  initials: undefined,
  isAriaHidden: false,
  isDeceased: false,
  size: undefined,
};

class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fallback: false,
    };

    this.handleFallback = this.handleFallback.bind(this);
  }

  componentDidMount() {
    objectFitImages();
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
      initials,
      isAriaHidden,
      isDeceased,
      size,
      ...customProps
    } = this.props;

    let avatarContent;

    if (image) {
      avatarContent = generateImage(image, alt, isAriaHidden, AVATAR_VARIANTS.USER, this.handleFallback);
    } else if (initials && (initials.length === 1 || initials.length === 2)) {
      const avatarTextClassNames = cx('initials');
      avatarContent = <span className={avatarTextClassNames} alt={alt} aria-label={alt} aria-hidden={isAriaHidden}>{initials.toUpperCase()}</span>;
    } else {
      avatarContent = generateImagePlaceholder(alt, isAriaHidden, AVATAR_VARIANTS.USER);
    }

    const attributes = { ...customProps };
    const customStyles = size ? Object.assign({ fontSize: size }, attributes.style) : attributes.style;
    const avatarClassNames = cx([
      'avatar',
      setColor(alt, color, hashValue),
      { 'fallback-icon': this.state.fallback },
      { image: Boolean(image) },
      { 'is-deceased': isDeceased },
      attributes.className,
    ]);

    return (
      <div {...attributes} className={avatarClassNames} style={customStyles}>
        {avatarContent}
      </div>
    );
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
