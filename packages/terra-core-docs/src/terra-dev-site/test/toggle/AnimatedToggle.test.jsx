import React, { useState } from 'react';
import Toggle from 'terra-toggle';

const AnimatedToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button type="button" id="trigger-toggle" onClick={handleOnClick} aria-expanded={isOpen} aria-controls="toggle">Animated Toggle</button>
      <Toggle id="toggle" isOpen={isOpen} isAnimated>
        <p>
          Lorem ipsum dolor sit amet,
          <a id="link" href="#test">consectetur</a>
          {' '}
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <label htmlFor="text-input">Text input</label>
          <input id="text-input" className="test" type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="select-field" defaultValue="Option 01">Select field</label>
          <select id="select-field">
            <option>Option 01</option>
            <option>Option 02</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="textarea">Textarea</label>
          <textarea id="textarea" cols="30" rows="5" defaultValue="Textarea text" />
        </div>
        <br />
        <div>
          <button type="button" id="button">button</button>
        </div>
      </Toggle>
    </div>
  );
};

export default AnimatedToggle;
