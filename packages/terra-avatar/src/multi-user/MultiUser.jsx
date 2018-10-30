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
   * Whether to hide avatar from the accessiblity API.
   */
  isAriaHidden: PropTypes.bool,
  /**
   * Overrides the default width.
   */
  width: PropTypes.string,
};

const defaultProps = {
  color: 'auto',
  hashValue: undefined,
  height: undefined,
  isAriaHidden: false,
  width: undefined,
};

class MultiUser extends React.Component {
  static generateImagePlaceholder(alt, isAriaHidden) {
    const avatarIconClassNames = cx(['avatar-icon', 'facility']);

    return <span className={avatarIconClassNames} role="img" aria-label={alt} alt={alt} aria-hidden={isAriaHidden} />;
  }

  static generateImage(alt, isAriaHidden) {
    const icon = MultiUser.generateImagePlaceholder(alt, isAriaHidden);

    return <TerraImage className={cx('avatar-image')} placeholder={icon} alt={alt} />;
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

      const imageComponent = MultiUser.generateImage(image, alt, isAriaHidden);
      this.state = { imageComponent };
    }
  }

  componentWillReceiveProps(newProps) {
    // If we have an image to display (they take precedence) and one of its attributes have changed
    if (newProps.alt !== this.props.alt) {
      const { alt, isAriaHidden } = newProps;

      const imageComponent = MultiUser.generateImage(alt, isAriaHidden);
      this.setState({ imageComponent });
    }
  }

  render() {
    const {
      alt,
      color,
      hashValue,
      height,
      isAriaHidden,
      isDeceased,
      width,
      ...customProps
    } = this.props;

    const attributes = Object.assign({}, customProps);

    let colorVariant = null;

    if (hashValue) {
      colorVariant = MultiUser.automateColor(hashValue);
    } else if (color !== 'auto') {
      colorVariant = color;
    } else {
      colorVariant = MultiUser.automateColor(alt);
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
    } else {
      avatarContent = MultiUser.generateImagePlaceholder(alt, isAriaHidden);
    }

    return (
      <div {...attributes} className={avatarClassNames} style={{ width, height }}>
        {avatarContent}
      </div>
    );
  }
}

MultiUser.propTypes = propTypes;
MultiUser.defaultProps = defaultProps;

export default MultiUser;
