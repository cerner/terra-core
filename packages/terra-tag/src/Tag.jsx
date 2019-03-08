import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import KeyCode from 'keycode-js';
import 'terra-base/lib/baseStyles';
import styles from './Tag.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Sets the href. When set will render the component as an anchor tag.
   */
  href: PropTypes.string,
  /**
   * An optional icon.
   */
  icon: PropTypes.element,
  /**
   * Callback function triggered when clicked.
   */
  onClick: PropTypes.func,
  /**
   * Callback function triggered when tag loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when tag gains focus.
   */
  onFocus: PropTypes.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: PropTypes.func,
  /**
   * Sets the tag text.
   */
  text: PropTypes.string.isRequired,
};

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focused: false };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur(event) {
    this.setState({ focused: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
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
      icon,
      text,
      href,
      onClick,
      onBlur,
      onFocus,
      onKeyUp,
      ...customProps
    } = this.props;

    const tagClasses = cx([
      'tag',
      { 'is-focused': this.state.focused },
      { 'is-interactive': href || onClick },
      customProps.className,
    ]);

    const iconClass = cx('icon');

    const tagIcon = icon ? <span className={iconClass}>{icon}</span> : null;
    const isClickable = href || onClick;
    const clickableComponent = href ? 'a' : 'button';
    const ComponentType = isClickable ? clickableComponent : 'span';

    return (
      <ComponentType
        {...customProps}
        className={tagClasses}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        onClick={onClick}
        onFocus={onFocus}
        href={href}
      >
        {tagIcon}
        {text}
      </ComponentType>
    );
  }
}

Tag.propTypes = propTypes;
export default Tag;
