import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
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

const propTypes = {
  /**
   * The content to display inside link.
   */
  text: PropTypes.string.isRequired,
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
   * @private
   * The intl object to be injected for translations.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func.isRequired,
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
   * Additional information to display as a native tooltip on hover.
   */
  title: PropTypes.string,
  /**
   * Sets the hyperlink variant. One of `default`, `external`, `image`, `video`, `audio`, `document`.
   */
  variant: PropTypes.oneOf(['default', 'external', 'image', 'video', 'audio', 'document']),
};

const defaultProps = {
  isDisabled: false,
  variant: variants.DEFAULT,
};

class HyperlinkButton extends React.Component {
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

  getHyperlinkIcon() {
    const { intl, variant } = this.props;
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
  }

  render() {
    const {
      text,
      isDisabled,
      isUnderlineHidden,
      intl,
      variant,
      onClick,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      title,
      ...customProps
    } = this.props;

    const theme = this.context;

    const hyperlinkClasses = classNames(
      cx(
        'button-reset',
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

    if (isDisabled) {
      // TODO: determine how component should change when is disabled.
      //
      // Perhaps have it be the same as https://www.scottohara.me/blog/2021/05/28/disabled-links.html
      // using an anchor with no href
      //
      // Could import Hyperlink and pass thru props, and assign an HREF of #, which will get removed.
    }

    return (
      <button
        {...customProps}
        className={hyperlinkClasses}
        aria-disabled={isDisabled}
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        onClick={onClick}
        onFocus={onFocus}
        title={title}
        role="link"
        type="button"
      >
        <span className={cx('button-inner')}>
          {text}
          {this.getHyperlinkIcon()}
        </span>
      </button>
    );
  }
}

HyperlinkButton.propTypes = propTypes;
HyperlinkButton.defaultProps = defaultProps;
HyperlinkButton.contextType = ThemeContext;

export { variants as HyperlinkButtonVariants };
export default injectIntl(HyperlinkButton);
