import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl } from 'react-intl';
import styles from '../common/Avatar.module.scss';
import {
  AVATAR_VARIANTS, generateInitials, generateImage, setColor,
} from '../common/AvatarUtils';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
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
  initials: PropTypes.string.isRequired,
  /**
   * Whether to hide avatar from the accessibility tree.
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
      intl,
      ...customProps
    } = this.props;

    const theme = this.context;

    let avatarContent;
    const avatarParams = {
      image,
      alt,
      intl,
      isDeceased,
      isAriaHidden,
      variant: AVATAR_VARIANTS.USER,
      handleFallback: this.handleFallback,
      initials: (initials.length > 2) ? initials.slice(0, 2) : initials,
    };

    if (image) {
      avatarContent = generateImage(avatarParams);
    } else {
      avatarContent = generateInitials(avatarParams);
    }

    const attributes = { ...customProps };
    const customStyles = size ? ({ fontSize: size, ...attributes.style }) : attributes.style;
    const avatarClassNames = classNames(
      cx(
        'avatar',
        setColor(alt, color, hashValue),
        { 'fallback-icon': this.state.fallback },
        { image: Boolean(image) },
        { 'is-deceased': isDeceased },
        theme.className,
      ),
      attributes.className,
    );

    /* eslint-disable react/forbid-dom-props */
    return (
      <div {...attributes} className={avatarClassNames} style={customStyles}>
        {avatarContent}
      </div>
    );
    /* eslint-enable react/forbid-dom-props */
  }
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;
Avatar.contextType = ThemeContext;

export default injectIntl(Avatar);
