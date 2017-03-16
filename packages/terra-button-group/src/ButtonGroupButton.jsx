import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Button from 'terra-button';

const propTypes = {
  isSelected: PropTypes.bool,
};

const ButtonGroupButton = ({ isSelected, ...otherProps }) => {
  const attributes = Object.assign({}, otherProps);
  attributes.className = classNames([
    'terra-ButtonGroup-button',
    { 'is-active': isSelected },
    attributes.className,
  ]);
  attributes['aria-selected'] = isSelected;

  return (
    <Button {...attributes} />
  );
};

ButtonGroupButton.propTypes = propTypes;

export default ButtonGroupButton;
