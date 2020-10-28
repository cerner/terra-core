import React, { useState } from 'react';
import Toggle from '../../../Toggle';

const OpenToggle = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button type="button" id="trigger-toggle" onClick={handleOnClick} aria-expanded={isOpen} aria-controls="toggle">Open Toggle</button>
      <Toggle id="toggle" isOpen={isOpen}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Toggle>
    </div>
  );
};

export default OpenToggle;
