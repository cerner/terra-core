import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import * as KeyCode from 'keycode-js';
import styles from './ToggleExample.module.scss';

const ToggleWithLabel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [focused, setfocused] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };
  const handleKeyDown = (event) => {
    if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
      setfocused({ focused: true });
    }
  };
  const handleKeyUp = (event) => {
    if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
      setfocused({ focused: true });
    }
  };
  const cx = classNamesBind.bind(styles);

  const toggleClasses = classNames(
    cx({ 'is-focused': focused }),
  );
  return (
    <div>
      <label htmlFor="Icon-label">
        <IconInformation className={toggleClasses} onClick={handleOnClick} handleKeyUp={handleKeyUp} handleKeyDown={handleKeyDown} a11yLabel="information Icon" tabIndex="0" role="button" area-labelledby="Toggle label" aria-expanded={isOpen} aria-controls="toggle" id="Icon-label" />
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
