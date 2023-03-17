import React from 'react';
import PropTypes from 'prop-types';
import IconExternalLink from 'terra-icon/lib/icon/IconExternalLink';
import IconAudio from 'terra-icon/lib/icon/IconAudio';
import IconVideoCamera from 'terra-icon/lib/icon/IconVideoCamera';
import IconImage from 'terra-icon/lib/icon/IconImage';
import IconDocuments from 'terra-icon/lib/icon/IconDocuments';
import { injectIntl } from 'react-intl';
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

const getHyperlinkIcon = (intl, variant) => {
  switch (variant) {
    case variants.AUDIO:
      return (<span className={cx('icon')}><IconAudio a11yLabel={intl.formatMessage({ id: 'Terra.hyperlink.iconLabel.audio' })} /></span>);
    case variants.DOCUMENT:
      return (<span className={cx('icon')}><IconDocuments a11yLabel={intl.formatMessage({ id: 'Terra.hyperlink.iconLabel.document' })} /></span>);
    case variants.EXTERNAL:
      return (<span className={cx('icon')}><IconExternalLink a11yLabel={intl.formatMessage({ id: 'Terra.hyperlink.iconLabel.external' })} /></span>);
    case variants.IMAGE:
      return (<span className={cx('icon')}><IconImage a11yLabel={intl.formatMessage({ id: 'Terra.hyperlink.iconLabel.image' })} /></span>);
    case variants.VIDEO:
      return (<span className={cx('icon')}><IconVideoCamera a11yLabel={intl.formatMessage({ id: 'Terra.hyperlink.iconLabel.video' })} /></span>);
    default:
      return null;
  }
};

const propTypes = {
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * This prop is deperecated and will be removed on next MVB release.
   * update all the references to use `text` prop to add the content to display inside link.
   */
  children: PropTypes.node,
  /**
   * The content to display inside link.
   */
  text: PropTypes.string,
  /**
   * Additional information to display as a native tooltip on hover.
   */
  title: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Sets the href of the link. href is required for hyperlinks and should be ignored when `onClick` callback is used.
   */
  href: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * This prop is deperecated and will be removed on next MVB release.
   * Do not use this prop as Accessibility best practices are to not use hyperlinks that are disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * This prop is deperecated and will be removed on next MVB release.
   * Do not use this prop as Accessibility best practices are to always have hyperlinks display with an underline.
   */
  isUnderlineHidden: PropTypes.bool,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Callback function triggered when clicked. onClick is required to render hyperlink as a button.
   * `onClick` should be ignored when `href` is provided.
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
   * Sets the hyperlink variant. One of `default`, `external`, `image`, `video`, `audio`, `document`.
   */
  variant: PropTypes.oneOf(['default', 'external', 'image', 'video', 'audio', 'document']),
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isDisabled: false,
  isUnderlineHidden: false,
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
    if (this.linkRef) {
      this.linkRef.current.setAttribute('data-focus-styles-enabled', 'false');
    }

    if (this.props.onMouseDown) {
      this.props.onMouseDown(event);
    }
  }

  handleOnBlur(event) {
    this.setState({ focused: false });
    if (this.linkRef) {
      this.linkRef.current.setAttribute('data-focus-styles-enabled', 'true');
    }

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
      text,
      isDisabled,
      isUnderlineHidden,
      intl,
      variant,
      href,
      onClick,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      title,
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

    const hyperlinkButtonClasses = classNames(
      cx(
        'button-reset',
        'hyperlink',
        variant,
        { 'is-underline-hidden': isUnderlineHidden },
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

    if (onClick && !isDisabled) {
      return (
        <button
          {...customProps}
          className={hyperlinkButtonClasses}
          onMouseDown={this.handleMouseDown}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          onBlur={this.handleOnBlur}
          onClick={onClick}
          onFocus={onFocus}
          title={title}
          role="link"
          type="button"
          ref={this.linkRef}
        >
          <span className={cx('button-inner')}>
            {text}
            {getHyperlinkIcon(intl, variant)}
          </span>
        </button>
      );
    }

    return (
      <a
        {...customProps}
        role={(isDisabled) ? 'link' : undefined}
        aria-disabled={isDisabled}
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
        title={title}
      >
        {text || children}
        {getHyperlinkIcon(intl, variant)}
      </a>
    );
  }
}

Hyperlink.propTypes = propTypes;
Hyperlink.defaultProps = defaultProps;
Hyperlink.contextType = ThemeContext;

export { variants as HyperlinkVariants };
export default injectIntl(Hyperlink);
