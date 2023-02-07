import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import { KEY_TAB } from 'keycode-js';
import './ToggleExample.module.scss';
import Card from 'terra-card';

const ToggleLabResults = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setFocus] = useState(true);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOnKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KEY_TAB) {
      setFocus(true);
    }
  };

  return (
    <Card>
      <Card.Body>
        <div>
          <label htmlFor="Icon-label">
            <IconInformation data-show-focus-styles={focused} focusable onKeyDown={handleOnKeyDown} onMouseDown={() => { setFocus(false); }} onClick={handleOnClick} a11yLabel="information Icon" tabIndex="0" role="button" aria-expanded={isOpen} aria-controls="toggle" id="Icon-label" />
            <span id="Icon-label"> Lab Results</span>
          </label>
          <Toggle isOpen={isOpen} isAnimated>
            <p>
              Cerner offers a suite of solutions targeted toward the key segments of the complex laboratory
              <a href="#test">blood sciences, microbiology, cellular pathology, molecular diagnostics, and laboratory logistical services.</a>
              {' '}
              Cerner also offers a reference lab network partner programme that allows you to collaborate with Cerner and other reference labs to support the sharing of information across your own lab network.
            </p>
          </Toggle>
        </div>
      </Card.Body>
    </Card>

  );
};

export default ToggleLabResults;
