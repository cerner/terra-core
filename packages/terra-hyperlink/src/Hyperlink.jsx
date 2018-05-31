import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Hyperlink.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  TAB: 9,
};

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
   * Whether or not the link should display and underline by default.
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
    this.state = { active: false, focused: false, mouseWasClicked: false };
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
    // Add active state to FF browsers
    if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
      this.setState({ active: true });

      // Follow href on space keydown when rendered as an anchor tag
      if (this.props.href) {
        // Prevent window scrolling
        event.preventDefault();
        window.location.href = this.props.href;
      }
    }

    // Add focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEYCODES.SPACE || event.nativeEvent.keyCode === KEYCODES.ENTER) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }
  }

  handleKeyUp(event) {
    // Remove active state from FF broswers
    if (event.nativeEvent.keyCode === KEYCODES.SPACE) {
      this.setState({ active: false });
    }

    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KEYCODES.TAB) {
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
    const target = variant === 'external' ? '_blank' : undefined;
    const rel = variant === 'external' ? 'noopener noreferrer' : undefined;

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
      </ComponentType>
    );
  }
}

Hyperlink.propTypes = propTypes;
Hyperlink.defaultProps = defaultProps;

export { variants as HyperlinkVariants };
export default Hyperlink;
