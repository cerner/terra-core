import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import TerraImage from 'terra-image';
import Utils from '../AvatarUtils';
import styles from '../Avatar.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Specifies the alternative text for the image.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Sets the background color. Defaults to `auto`.
   * Accepted values: `'auto'`, `'neutral'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'`, `'ten'`.
   */
  color: PropTypes.oneOf(['auto', 'neutral', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten']),
  /**
   * Value used for the hash function when color is set to `auto`. If not provided, hash function utilizes alt.
   */
  hashValue: PropTypes.string,
  /**
   * Overrides the default height.
   */
  height: PropTypes.string,
  /**
   * The image to display.
   */
  image: PropTypes.string,
  /**
   * One or two letters to display.
   */
  initials: PropTypes.string,
  /**
   * Whether to hide avatar from the accessiblity API.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Whether the person is desceased.
   */
  isDeceased: PropTypes.bool,
  /**
   * Overrides the default width.
   */
  width: PropTypes.string,
};

const defaultProps = {
  color: 'auto',
  hashValue: undefined,
  height: undefined,
  image: undefined,
  initials: undefined,
  isAriaHidden: false,
  isDeceased: false,
  width: undefined,
};

class Avatar extends React.Component {
  static generateImagePlaceholder(alt, isAriaHidden) {
    const avatarIconClassNames = cx([
      'avatar-icon',
      'user',
    ]);

    return <span className={avatarIconClassNames} role="img" aria-label={alt} alt={alt} aria-hidden={isAriaHidden} />;
  }

  static generateImage(image, alt, isAriaHidden) {
    const icon = Avatar.generateImagePlaceholder(alt, isAriaHidden);

    return <TerraImage className={cx('avatar-image')} src={image} placeholder={icon} alt={alt} />;
  }

  static automateColor(hashValue) {
    const hash = Utils.calculateHash(hashValue);
    // console.log(`hash: ${hash}`);
    const color = Utils.getVariant(hash);
    // console.log(`color: ${color}`);
    return color;
  }

  constructor(props) {
    super(props);

    // If image has been provided we need to generate the image to display and store it in the state
    if (props.image) {
      const { alt, image, isAriaHidden } = props;

      const imageComponent = Avatar.generateImage(image, alt, isAriaHidden);
      this.state = { imageComponent };
    }

    // Checks to run when not in production
    if (process.env.NODE_ENV !== 'production') {
      if (props.image && props.initials) {
        // eslint-disable-next-line
        console.warn('Only one of the props: [image, initials] should be supplied.');
      }
    }
  }

  componentWillReceiveProps(newProps) {
    // If we have an image to display (they take precedence) and one of its attributes have changed
    if (newProps.image && (newProps.image !== this.props.image || newProps.alt !== this.props.alt)) {
      const { alt, image, isAriaHidden } = newProps;

      const imageComponent = Avatar.generateImage(image, alt, isAriaHidden);
      this.setState({ imageComponent });
    }
  }

  render() {
    const {
      alt,
      color,
      hashValue,
      height,
      image,
      initials,
      isAriaHidden,
      isDeceased,
      width,
      ...customProps
    } = this.props;

    const attributes = Object.assign({}, customProps);

    let colorVariant = null;

    if (hashValue) {
      colorVariant = Avatar.automateColor(hashValue);
    } else if (color !== 'auto') {
      colorVariant = color;
    } else {
      colorVariant = Avatar.automateColor(alt);
    }
    console.log(`color variant: ${colorVariant}`);

    const avatarClassNames = cx([
      'avatar',
      `${colorVariant}`,
      attributes.className,
    ]);

    let avatarContent;
    if (image) {
      avatarContent = this.state.imageComponent;
    } else if (initials && (initials.length === 1 || initials.length === 2)) {
      const avatarTextClassNames = cx('avatar-text');

      avatarContent = <span className={avatarTextClassNames} aria-hidden={isAriaHidden}>{initials.toUpperCase()}</span>;
    } else {
      avatarContent = Avatar.generateImagePlaceholder(alt, isAriaHidden);
    }

    return (
      <div {...attributes} aria-label={alt} className={avatarClassNames} style={{ width, height }}>
        {avatarContent}
      </div>
    );
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
