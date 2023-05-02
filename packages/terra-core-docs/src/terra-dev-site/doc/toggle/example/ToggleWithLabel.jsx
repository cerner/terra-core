import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import { KEY_TAB, KEY_SPACE, KEY_RETURN } from 'keycode-js';
import './ToggleExample.module.scss';

const ToggleWithLabel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocus] = useState(true);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOnKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_TAB) {
      setFocus(true);
    }
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      setIsOpen(!isOpen);
      event.preventDefault();
    }
  };

  return (
    <div>
      <label htmlFor="Icon-label">
        <IconInformation data-show-focus-styles={focused} focusable="true" onKeyDown={handleOnKeyDown} onMouseDown={() => { setFocus(false); }} onClick={handleOnClick} a11yLabel="Cerner’s Physician Solutions" tabIndex="0" role="button" aria-expanded={isOpen} aria-controls="toggle" id="Icon-label" />
        <span id="Icon-label"> Cerner’s Physician Solutions</span>
      </label>
      <Toggle isOpen={isOpen} isAnimated>
        <p>
          Cerner’s physician solutions include more than 40 specialties – created by physicians for physicians – to drive efficiency and productivity. We know that not every physician works the same way; Cerner solutions allow for screen customization, allowing you to provide the best care with the fewest distractions.
        </p>
      </Toggle>
    </div>
  );
};

export default ToggleWithLabel;
