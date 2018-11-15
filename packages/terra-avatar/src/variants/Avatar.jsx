import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import memoize from 'memoize-one';
import 'terra-base/lib/baseStyles';
import Utils from '../common/AvatarUtils';
import styles from '../common/Avatar.module.scss';

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
   * Whether the person is deceased. Overrides any color variant.
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

    if (props.image) {
      this.imageComponent = memoize(Utils.generateImage);
    }

    // Checks to run when not in production
    if (process.env.NODE_ENV !== 'production') {
      if (props.image && props.initials) {
        // eslint-disable-next-line
        console.warn('Only one of the props: [image, initials] should be supplied.');
      }
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

    let colorVariant;
    let avatarContent;
    if (image) {
      colorVariant = '';
      avatarContent = this.imageComponent(image, alt, isAriaHidden, Utils.AVATAR_VARIANTS.USER);
    } else if (initials && (initials.length === 1 || initials.length === 2)) {
      colorVariant = Utils.setColor(alt, color, hashValue);
      const avatarTextClassNames = cx('initials');
      avatarContent = <span className={avatarTextClassNames} aria-hidden={isAriaHidden}>{initials.toUpperCase()}</span>;
    } else {
      colorVariant = Utils.setColor(alt, color, hashValue);
      avatarContent = Utils.generateImagePlaceholder(alt, isAriaHidden, Utils.AVATAR_VARIANTS.USER);
    }

    const attributes = Object.assign({}, customProps);
    const avatarClassNames = cx([
      'avatar',
      `${colorVariant}`,
      { 'is-deceased': isDeceased },
      attributes.className,
    ]);

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
