import React, { Children, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import styles from './Tag.module.scss';

const cx = classNamesBind.bind(styles);

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
    this.state = { focused: props.focused, event: null };
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  handleOnBlur(event) {
    this.setState({ focused: false });
    this.setState({ event })

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleKeyUp(event) {
    this.setState({ event })
    // Apply focus styles for keyboard navigation
    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
      this.setState({ focused: true });
    }else if (event.nativeEvent.keyCode === KeyCode.KEY_RIGHT) {
      this.setState({ focused: true });
    }else if (event.nativeEvent.keyCode === KeyCode.KEY_LEFT) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
    if (this.props.onFocusChange) {
      this.props.onFocusChange(this.state.focused, event);
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.focused !== this.state.focused) {
  //     // Perform the effect when the specific state has changed
  //     this.props.onFocusChange(this.state.focused, event);
  //   }
  // }

  render() {
    const {
      icon,
      text,
      href,
      onClick,
      onBlur,
      onFocus,
      onKeyUp,
      onFocusChange,
      ...customProps
    } = this.props;

    const theme = this.context;

    const tagClasses = classNames(
      cx(
        'tag',
        { 'is-focused': customProps.className?.includes('blah_blah') ? true : this.state.focused },
        { 'is-interactive': href || onClick },
        theme.className,
      ),
      customProps.className,
    );

    const iconClass = cx('icon');

    const tagIcon = icon ? <span className={iconClass}>{icon}</span> : null;
    const isClickable = href || onClick;
    const clickableComponent = href ? 'a' : 'button';
    const ComponentType = isClickable ? clickableComponent : 'span';

    // useEffect(() => {
    //   // console.log('isFocused: ', f);
    //   onFocusChange(this.state.focused);
    // }, [this.state.focused]);

    return (
      <ComponentType
        {...customProps}
        className={tagClasses}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        onClick={onClick}
        onFocus={onFocus}
        href={href}
        data-terra-tag
      >
        {tagIcon}
        {text}
      </ComponentType>
    );
  }
}

Tag.propTypes = propTypes;
Tag.contextType = ThemeContext;

export default Tag;
