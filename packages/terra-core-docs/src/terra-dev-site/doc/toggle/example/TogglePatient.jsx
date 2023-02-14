import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import { KEY_TAB, KEY_SPACE, KEY_RETURN } from 'keycode-js';
import './ToggleExample.module.scss';
import Table from 'terra-table';

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
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      setIsOpen(!isOpen);
      event.preventDefault();
    }
  };

  return (
    <div>
      <label htmlFor="Info-Icon">
        <IconInformation data-show-focus-styles={focused} focusable onKeyDown={handleOnKeyDown} onMouseDown={() => { setFocus(false); }} onClick={handleOnClick} a11yLabel="Allergies, Information Icon" tabIndex="0" role="button" aria-expanded={isOpen} aria-controls="toggle" id="Info-Icon" />
        <span> Allergies</span>
      </label>
      <Toggle isOpen={isOpen} isAnimated>
        <Table
          numberOfColumns={3}
          cellPaddingStyle="standard"
          dividerStyle="horizontal"
          headerData={{
            cells: [
              { id: 'header-name', key: 'name', children: 'Patient is allergic TO:' },
            ],
          }}
          bodyData={[
            {
              rows: [
                {
                  key: 'row-0',
                  cells: [
                    { key: 'cell-0', children: 'dogs' },
                  ],
                },
                {
                  key: 'row-1',
                  cells: [
                    { key: 'cell-0', children: 'dust' },
                  ],
                },
                {
                  key: 'row-2',
                  cells: [
                    { key: 'cell-0', children: 'peanuts' },
                  ],
                },
              ],
            },
          ]}
        />
      </Toggle>
    </div>
  );
};

export default TogglePatient;
