import React, { PropTypes } from 'react';
import Button from 'terra-button';
import classNames from 'classnames';
import 'terra-base/lib/baseStyles';
import './ButtonGroupButton.scss';

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

  const buttonClassName = classNames([
    'terra-ButtonGroupButton',
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
