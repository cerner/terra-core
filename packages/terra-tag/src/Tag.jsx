import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Tag.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  TAB: 9,
};

const tagTheme = {
  NORMAL: 'normal',
};

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
  /**
   * Sets the tag theme.
   */
  theme: PropTypes.string,
};

const defaultProps = {
  theme: tagTheme.NORMAL,
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
    if (event.nativeEvent.keyCode === KEYCODES.TAB) {
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
      theme,
      href,
      onClick,
      onBlur,
      onFocus,
      onKeyUp,
      ...customProps
    } = this.props;

    const tagClasses = cx([
      'tag',
      theme,
      { 'is-focused': this.state.focused },
      { 'is-interactive': href || onClick },
      customProps.className,
    ]);

    const iconClass = cx('icon');

    const tagText = <span>{text}</span>;
    const tagIcon = icon ? <span className={iconClass}>{icon}</span> : null;
    const isClickable = href || onClick;
    const clickableComponent = href ? 'a' : 'button';
    const ComponentType = isClickable ? clickableComponent : 'span';

    return (
      <ComponentType
        className={tagClasses}
        onKeyUp={this.handleKeyUp}
        onBlur={this.handleOnBlur}
        onClick={onClick}
        onFocus={onFocus}
        href={href}
      >
        {tagIcon}
        {tagText}
      </ComponentType>
    );
  }
}

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;
export default Tag;
