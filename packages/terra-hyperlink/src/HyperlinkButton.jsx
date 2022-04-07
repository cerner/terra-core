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
// import styles from './Hyperlink.module.scss';
import styles from './HyperlinkChanges.module.scss';

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
      return (<span className={cx(['icon', variant])}><IconAudio a11yLabel="temp-audio" /></span>);
    case variants.DOCUMENT:
      return (<span className={cx(['icon', variant])}><IconDocuments a11yLabel="temp-document" /></span>);
    case variants.EXTERNAL:
      return (<span className={cx(['icon', variant])}><IconExternalLink a11yLabel="temp-external"/></span>);
    case variants.IMAGE:
      return (<span className={cx(['icon', variant])}><IconImage a11yLabel="temp-image"/></span>);
    case variants.VIDEO:
      return (<span className={cx(['icon', variant])}><IconVideoCamera a11yLabel="temp-video" /></span>);
    default:
      return null;
  }
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
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) Accessibility best practices are to not use hyperlinks that are disabled.
   * This prop has been marked as private, allowing it to be used, but for very special circumstances or higher-order components that need it in rare occasions.
   */
  isDisabled: PropTypes.bool,
  /**
   * @private
   * Whether or not the link should display an underline by default. Will still display an underline on hover and focus.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) Accessibility best practices are to always have hyperlinks display with an underline.
   * This prop has been marked as private, allowing it to be used, but for very special circumstances such as higher-order components that use hyperlink in approved ways without an underline because interactive affordance is replaced with an alternate method.
   */
  isUnderlineHidden: PropTypes.bool,
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

  render() {
    const {
      text,
      isDisabled,
      isUnderlineHidden,
      variant,
      onClick,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
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

    // const attrSpread = {};

    if (isDisabled) {
      // attrSpread.role = 'link';
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
        role="link"
        type="button"
      >
        <span className={cx('button-inner')}>
          {text}
          {getHyperlinkIcon(variant)}
        </span>
      </button>
    );
  }
}

HyperlinkButton.propTypes = propTypes;
HyperlinkButton.defaultProps = defaultProps;
HyperlinkButton.contextType = ThemeContext;

export { variants as HyperlinkButtonVariants };
export default HyperlinkButton;
