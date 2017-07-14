import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './ButtonGroupButton.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Indicates if the button should be selected on initial render.
   */
  isSelected: PropTypes.bool,
  /**
   * Sets the button text
   */
  text: PropTypes.string,
  /**
   * An optional icon. Nested inline with the text when provided
   */
  icon: PropTypes.element,
  /**
   * Callback function triggered when clicked
   */
  onClick: PropTypes.func,
  /**
   * Reverses the position of the icon and text
   */
  isReversed: PropTypes.bool,
  /**
   * Child Nodes
   */
  children: PropTypes.node,
};

const defaultProps = {
  isSelected: false,
  isReversed: false,
};


const ButtonGroupButton = ({ isSelected, ...customProps }) => {
  const attributes = Object.assign({}, customProps);

  const buttonClassName = cx([
    'button-group-button',
    { 'is-active': isSelected },
    attributes.className,
  ]);
  attributes['aria-selected'] = isSelected;

  return (
    <Button
      {...attributes}
      className={buttonClassName}
    />);
};

ButtonGroupButton.propTypes = propTypes;
ButtonGroupButton.defaultProps = defaultProps;

export default ButtonGroupButton;
