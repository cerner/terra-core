import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
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
   * @private
   * Internal prop used to focus to current tag if the tag is clicked with mouse
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
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.tagNode = null;
  }

  handleOnBlur(event) {
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  }

  handleKeyUp(event) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }

  handleClick(event) {
    if (this.props.onTagClick) {
      const TagId = (this.tagNode) ? this.tagNode.id : event.target.id;
      this.props.onTagClick(TagId);
    }
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  setTagNode = (node) => {
    this.tagNode = node;
  };

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
        ref={this.setTagNode}
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
