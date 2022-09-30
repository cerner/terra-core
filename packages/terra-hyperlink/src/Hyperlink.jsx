import React from 'react';
import PropTypes from 'prop-types';
import IconExternalLink from 'terra-icon/lib/icon/IconExternalLink';
import IconAudio from 'terra-icon/lib/icon/IconAudio';
import IconVideoCamera from 'terra-icon/lib/icon/IconVideoCamera';
import IconImage from 'terra-icon/lib/icon/IconImage';
import IconDocuments from 'terra-icon/lib/icon/IconDocuments';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import styles from './Hyperlink.module.scss';

const cx = classNamesBind.bind(styles);

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
   * Sets the href of the link.
   */
  href: PropTypes.string,
  /**
   * @private
   * Whether or not the link should be disabled.
   *
   * Accessibility best practices are to not use hyperlinks that are disabled.
   * This prop has been marked as private, allowing it to be used, but for very special circumstances or higher-order components that need it in rare occasions.
   */
  isDisabled: PropTypes.bool,
  /**
   * @private
   * Whether or not the link should display an underline by default. Will still display an underline on hover and focus.
   *
   * Accessibility best practices are to always have hyperlinks display with an underline.
   * This prop has been marked as private, allowing it to be used, but for very special circumstances such as higher-order components that use hyperlink in approved ways without an underline because interactive affordance is replaced with an alternate method.
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
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onMouseDown: PropTypes.func,
  /**
   * The content to display inside link.
   */
  text: PropTypes.string.isRequired,
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
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.linkRef = React.createRef();
  }

  handleMouseDown(event) {
    this.linkRef.current.setAttribute('data-focus-styles-enabled', 'false');

    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }
  }

  handleOnBlur(event) {
    this.setState({ focused: false });
    this.linkRef.current.setAttribute('data-focus-styles-enabled', 'true');

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
      text,
      isDisabled,
      isUnderlineHidden,
      variant,
      href,
      onClick,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      ...customProps
    } = this.props;

    const theme = this.context;

    const hyperlinkClasses = classNames(
      cx(
        'hyperlink',
        variant,
        { 'is-disabled': isDisabled },
        { 'is-underline-hidden': isUnderlineHidden },
        { 'is-active': this.state.active },
        { 'is-focused': this.state.focused },
        theme.className,
      ),
      customProps.className,
    );

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

    const attrsToDisable = {};
    if (isDisabled) {
      attrsToDisable.role = 'link';
      attrsToDisable['aria-disabled'] = true;
    }

    return (
      <a
        {...customProps}
        {...attrsToDisable}
        className={hyperlinkClasses}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        onMouseDown={this.handleMouseDown}
        onClick={onClick}
        onFocus={onFocus}
        href={isDisabled ? null : href}
        target={target}
        rel={rel}
        data-focus-styles-enabled
        ref={this.linkRef}
      >
        {text}
        {getHyperlinkIcon(variant)}
      </a>
    );
  }
}

Hyperlink.propTypes = propTypes;
Hyperlink.defaultProps = defaultProps;
Hyperlink.contextType = ThemeContext;

export { variants as HyperlinkVariants };
export default Hyperlink;
