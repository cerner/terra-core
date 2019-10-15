import React from 'react';
import PropTypes from 'prop-types';
import IconExternalLink from 'terra-icon/lib/icon/IconExternalLink';
import IconAudio from 'terra-icon/lib/icon/IconAudio';
import IconVideoCamera from 'terra-icon/lib/icon/IconVideoCamera';
import IconImage from 'terra-icon/lib/icon/IconImage';
import IconDocuments from 'terra-icon/lib/icon/IconDocuments';
import classNames from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import styles from './Hyperlink.module.scss';

const cx = classNames.bind(styles);

const variants = {
  DEFAULT: 'default',
  EXTERNAL: 'external',
  IMAGE: 'image',
  VIDEO: 'video',
  AUDIO: 'audio',
  DOCUMENT: 'document',
};

const getHyperlinkIcon = (variant) => {
  switch (variant) {
    case variants.AUDIO:
      return (<span className={cx('icon')}><IconAudio /></span>);
    case variants.DOCUMENT:
      return (<span className={cx('icon')}><IconDocuments /></span>);
    case variants.EXTERNAL:
      return (<span className={cx('icon')}><IconExternalLink /></span>);
    case variants.IMAGE:
      return (<span className={cx('icon')}><IconImage /></span>);
    case variants.VIDEO:
      return (<span className={cx('icon')}><IconVideoCamera /></span>);
    default:
      return null;
  }
};

const propTypes = {
  /**
   * The content to display inside link.
   */
  children: PropTypes.node,
  /**
   * Sets the href of the link.
   */
  href: PropTypes.string,
  /**
   * Whether or not the link should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not the link should display an underline by default. Will still display an underline on hover and focus.
   */
  isUnderlineHidden: PropTypes.bool,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func,
  /**
   * Callback function triggered when hyperlink loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when hyperlink gains focus.
   */
  onFocus: PropTypes.func,
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: PropTypes.func,
  /**
   * Sets the hyperlink variant. One of `default`, `external`, `image`, `video`, `audio`, `document`.
   */
  variant: PropTypes.oneOf(['default', 'external', 'image', 'video', 'audio', 'document']),
};

const defaultProps = {
  isDisabled: false,
  variant: variants.DEFAULT,
};

class Hyperlink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false, focused: false };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur(event) {
    this.setState({ focused: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleKeyDown(event) {
    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  handleKeyUp(event) {
    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }

  render() {
    const {
      children,
      isDisabled,
      isUnderlineHidden,
      variant,
      href,
      onClick,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      ...customProps
    } = this.props;

    const hyperlinkClasses = cx([
      'hyperlink',
      variant,
      { 'is-disabled': isDisabled },
      { 'is-underline-hidden': isUnderlineHidden },
      { 'is-active': this.state.active },
      { 'is-focused': this.state.focused },
      customProps.className,
    ]);

    const ComponentType = isDisabled ? 'span' : 'a';

    let { target } = customProps; // Defaults to undefined if not set
    let { rel } = customProps; // Defaults to undefined if not set

    // If variant is set to external, we'll add target="_blank" and rel="noopener noreferrer"
    // unless user passes their own target or rel attribute
    if (!customProps.target && variant === 'external') {
      target = '_blank';
    }

    if (!customProps.rel && variant === 'external') {
      rel = 'noopener noreferrer';
    }

    return (
      <ComponentType
        {...customProps}
        className={hyperlinkClasses}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        onClick={onClick}
        onFocus={onFocus}
        href={isDisabled ? null : href}
        target={target}
        rel={rel}
      >
        {children}
        {getHyperlinkIcon(variant)}
      </ComponentType>
    );
  }
}

Hyperlink.propTypes = propTypes;
Hyperlink.defaultProps = defaultProps;

export { variants as HyperlinkVariants };
export default Hyperlink;
