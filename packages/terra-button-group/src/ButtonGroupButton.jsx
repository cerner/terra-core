import React, { PropTypes } from 'react';
import classNames from 'classnames';

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

const ButtonGroupButton = ({ isSelected, text, icon, isReversed, children, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const buttonText = text ? <span className="terra-ButtonGroupButton-text">{text}</span> : null;

  const order = isReversed ?
    [buttonText, icon, children] :
    [icon, buttonText, children];

  attributes.className = classNames([
    'terra-ButtonGroupButton',
    { 'is-selected': isSelected },
    attributes.className,
  ]);
  attributes['aria-selected'] = isSelected;

  return React.createElement('button', attributes, ...order);
};

ButtonGroupButton.propTypes = propTypes;
ButtonGroupButton.defaultProps = defaultProps;

export default ButtonGroupButton;
