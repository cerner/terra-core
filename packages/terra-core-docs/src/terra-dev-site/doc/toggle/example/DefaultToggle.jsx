import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import { KEY_TAB, KEY_SPACE, KEY_RETURN } from 'keycode-js';
import './ToggleExample.module.scss';

const ToggleDefault = () => {
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
      <IconInformation data-show-focus-styles={focused} focusable a11yLabel="information Icon" tabIndex="0" role="button" onKeyDown={handleOnKeyDown} onMouseDown={() => { setFocus(false); }} onClick={handleOnClick} aria-expanded={isOpen} aria-controls="toggle" />
      {/**
      * The aria-expanded state is used on the triggering component to indicate the contents are collapsible, and whether a region is currently expanded or collapsed
      */}
      <Toggle id="default-toggle" isOpen={isOpen}>
      <p>
      Health care providers in smaller communities often face the challenge of how to do more with less while trying to provide the best possible care to their populations. Geographic isolation, workforce shortages, technology disparities and diminishing resources can make it harder to deliver high-quality care. Leveraging the right technology can be critical to provide their community with an integrated healthcare experience.
        </p>
      </Toggle>
    </div>
  );
};

export default ToggleDefault;

