import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import TerraImage from 'terra-image';
import styles from '../Avatar.module.scss';

const cx = classNames.bind(styles);

// Changes the placeholder image for while the image prop, if provided, is loading
const AvatarVariants = {
  FACILITY: 'facility',
  USER: 'user',
};

const propTypes = {
  /**
   * The text content that specifies the alternative text for the image.
   */
  alt: PropTypes.string,
  /**
   * The text content of the aria-label for accessibility.
   */
  ariaLabel: PropTypes.string,
  /**
   * The image to display.
   */
  image: PropTypes.string,
  /**
   * Two or three letters to display.
   */
  initials: PropTypes.string,
  /**
   * The avatar variant. One of `AvatarVariants.FACILITY`, `AvatarVariants.USER`.
   */
  variant: PropTypes.oneOf([...Object.values(AvatarVariants)]),
};

const defaultProps = {
  alt: undefined,
  ariaLabel: undefined,
  image: undefined,
  initials: undefined,
  variant: AvatarVariants.USER,
};

class Avatar extends React.Component {
  static generateImagePlaceholder(variant) {
    const avatarIconClassNames = cx([
      'avatar-icon',
      variant,
    ]);

    return <span className={avatarIconClassNames} />;
  }

  static generateImage(image, variant, alt) {
    const icon = Avatar.generateImagePlaceholder(variant);

    return <TerraImage className={cx('avatar-image')} src={image} placeholder={icon} alt={alt} />;
  }

  constructor(props) {
    super(props);

    // If image has been provided we need to generate the image to display and store it in the state
    if (props.image) {
      const { alt, image, variant } = props;

      const imageComponent = Avatar.generateImage(image, variant, alt);
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
    if (newProps.image && (newProps.image !== this.props.image
      || newProps.alt !== this.props.alt || newProps.variant !== this.props.variant)) {
      const { alt, image, variant } = newProps;

      const imageComponent = Avatar.generateImage(image, variant, alt);
      this.setState({ imageComponent });
    }
  }

  render() {
    const {
      alt,
      ariaLabel,
      initials,
      variant,
      image,
      ...customProps
    } = this.props;

    const attributes = Object.assign({}, customProps);

    const avatarClassNames = cx([
      'avatar',
      attributes.className,
    ]);

    let avatarContent;
    if (image) {
      avatarContent = this.state.imageComponent;
    } else if (initials && (initials.length === 2 || initials.length === 3)) {
      const avatarTextClassNames = cx([
        { 'avatar-text-small': initials && initials.length === 3 },
        { 'avatar-text-large': initials && initials.length === 2 },
      ]);

      avatarContent = <span className={avatarTextClassNames}>{initials.toUpperCase()}</span>;
    } else {
      avatarContent = Avatar.generateImagePlaceholder(variant);
    }

    return (
      <div {...attributes} aria-label={ariaLabel} className={avatarClassNames}>
        {avatarContent}
      </div>
    );
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
export { AvatarVariants };
