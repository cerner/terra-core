import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import { KEY_TAB } from 'keycode-js';
import './ToggleExample.module.scss';

const ToggleWithLabel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocus] = useState(true);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
    setFocus(false);
  };
  const handleOnKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_TAB) {
      setFocus(true);
    }
  };

  return (
    <div>
      <label htmlFor="Icon-label">
        <IconInformation data-show-focus-styles={focused} focusable onKeyDown={handleOnKeyDown} onMouseDown={() => { setFocus(false); }} onClick={handleOnClick} a11yLabel="information Icon" tabIndex="0" role="button" aria-expanded={isOpen} aria-controls="toggle" id="Icon-label" />
        <span id="Icon-label"> Toggle label</span>
      </label>
      <Toggle isOpen={isOpen} isAnimated>
        <p>
          Cerner provides research solutions and services to support clinical sites and academic institutions.
          <a href="https://www.cerner.com/gb/en/solutions/data-research">Data and research</a>
          {' '}
          We bring a deep understanding of clinical systems, workflows and health data, as well as extensive experience in pharmaceutical, outcomes and health economic research. Through medical and economic analyses, researchers gain insights into the viability, safety, and efficacy of new and existing therapies. Principal investigators and research coordinators can use the Cerner EHR to facilitate and enhance their research activities.
        </p>
      </Toggle>
    </div>
  );
};

export default ToggleWithLabel;
