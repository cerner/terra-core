import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import { KEY_TAB, KEY_SPACE, KEY_RETURN } from 'keycode-js';
import './ToggleExample.module.scss';

const AnimatedToggle = () => {
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
      <Toggle id="animated-toggle" isOpen={isOpen} isAnimated>
        <p>
        Cerner is committed to providing technology and services that help enable high-quality care to organizations of all types and sizes, regardless of their ZIP code. Through the CommunityWorksSM delivery model, Cerner scales and tailors their electronic health record (EHR) system, Cerner Millennium®, to offer cutting-edge technology with predictable IT spend, providing an economical business model for community and critical access hospitals.
        </p>
      </Toggle>
    </div>
  );
};

export default AnimatedToggle;
