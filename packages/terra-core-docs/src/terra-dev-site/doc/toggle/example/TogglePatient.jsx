import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import { KEY_TAB } from 'keycode-js';
import './ToggleExample.module.scss';
import Card from 'terra-card';

const TogglePatient = () => {
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
            <span id="Icon-label"> Patients</span>
          </label>
          <Toggle isOpen={isOpen} isAnimated>
            <p>
              Cerner Patient
              <a href="https://www.cerner.com/solutions/patient"> Cerner recognizes the digitization of health care requires improved focus around care coordination and communication, as well as support, empowerment and access to promote patient-centered care.</a>
              {' '}
              Leveraging an ecosystem of virtual, remote and mobile services and technology, your provider is able to provide you greater access to care and enable collaboration among your care team. Through use of Cerner’s patient engagement tools, your care team is able to track your progress and proactively engage with you, enabling the delivery of timely, quality and cost-effective care anywhere.
            </p>
          </Toggle>
        </div>
      </Card.Body>
    </Card>

  );
};

export default TogglePatient;
