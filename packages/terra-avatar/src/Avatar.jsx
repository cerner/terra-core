import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Utils from './common/AvatarUtils';
import styles from './common/Avatar.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Specifies the alternative text for the image.
   */
  alt: PropTypes.string.isRequired,
  /**
   * Sets the background color. Defaults to `auto`. Color variants are theme specific.
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
  constructor(props) {
    super(props);

    // If image has been provided we need to generate the image to display and store it in the state
    if (props.image) {
      const { alt, image, isAriaHidden } = props;

      const imageComponent = Utils.generateImage(image, alt, isAriaHidden, Utils.AvatarVariants.USER);
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
    if (newProps.image && (newProps.image !== this.props.image || newProps.alt !== this.props.alt || newProps.isAriaHidden !== this.props.isAriaHidden)) {
      const { alt, image, isAriaHidden } = newProps;

      const imageComponent = Utils.generateImage(image, alt, isAriaHidden, Utils.AvatarVariants.USER);
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

    const colorVariant = Utils.setColor(alt, color, hashValue);
    const attributes = Object.assign({}, customProps);
    const avatarClassNames = cx([
      'avatar',
      `${colorVariant}`,
      { 'is-deceased': isDeceased },
      attributes.className,
    ]);

    let avatarContent;
    if (image) {
      avatarContent = this.state.imageComponent;
    } else if (initials && (initials.length === 1 || initials.length === 2)) {
      const avatarTextClassNames = cx('initials');
      avatarContent = <span className={avatarTextClassNames} aria-hidden={isAriaHidden}>{initials.toUpperCase()}</span>;
    } else {
      avatarContent = Utils.generateImagePlaceholder(alt, isAriaHidden, Utils.AvatarVariants.USER);
    }

    return (
      <div {...attributes} className={avatarClassNames} style={{ height, width }}>
        {avatarContent}
      </div>
    );
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
