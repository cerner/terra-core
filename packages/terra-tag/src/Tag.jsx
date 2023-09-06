import React from 'react';
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
   * Callback function triggered when tag is clicked with mouse.
   */
  onTagClick: PropTypes.func,
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
    this.handleClick = this.handleClick.bind(this);
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
    } else if (event.nativeEvent.keyCode === KeyCode.KEY_RIGHT) {
      this.setState({ focused: true });
    } else if (event.nativeEvent.keyCode === KeyCode.KEY_LEFT) {
      this.setState({ focused: true });
    } else if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      this.setState({ focused: true });
    }

    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }

  handleClick(event) {
    if (this.props.onTagClick) {
      this.props.onTagClick(event.target.id);
    }
    if (this.props.onClick) {
      this.props.onClick();
    }
    setTimeout(() => {
      this.setState({ focused: true });
    }, 100);
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
      onTagClick,
      ...customProps
    } = this.props;

    const theme = this.context;

    const tagClasses = classNames(
      cx(
        'tag',
        { 'is-focused': this.state.focused },
        { 'is-interactive': href || onClick },
        { 'has-underline': href },
        theme.className,
      ),
      customProps.className,
    );

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
        onClick={this.handleClick}
        onFocus={onFocus}
        href={href}
        data-terra-tag
        role="listitem"
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
