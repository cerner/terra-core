import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ButtonGroupButton.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: PropTypes.element,
  /**
   * Whether or not the button should be disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Indicates if the button should be selected on initial render.
   */
  isSelected: PropTypes.bool,
  /**
   * Callback function triggered when button loses focus.
   */
  onBlur: PropTypes.func,
  /**
   * Callback function triggered when clicked
   */
  onClick: PropTypes.func,
  /**
   * Callback function triggered when button gains focus.
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
   * Sets the button text. If an icon is provided, it will be an icon only button and this text is set as the aria-label for accessibility.
   */
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  isDisabled: false,
  isSelected: false,
};


const ButtonGroupButton = ({ isSelected, icon, ...customProps }) => {
  const attributes = Object.assign({}, customProps);

  const buttonClassName = cx([
    'button-group-button',
    { 'is-active': isSelected },
    attributes.className,
  ]);
  attributes['aria-pressed'] = isSelected;

  return (
    <Button
      {...attributes}
      icon={icon}
      isIconOnly={icon != null}
      variant={Button.Opts.Variants.NEUTRAL}
      className={buttonClassName}
    />);
};

ButtonGroupButton.propTypes = propTypes;
ButtonGroupButton.defaultProps = defaultProps;

export default ButtonGroupButton;
