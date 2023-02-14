import React, { useState } from 'react';
import Toggle from 'terra-toggle';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import { KEY_TAB, KEY_SPACE, KEY_RETURN } from 'keycode-js';
import './ToggleExample.module.scss';
import Table from 'terra-table';

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
    if (event.nativeEvent.keyCode === KEY_SPACE || event.nativeEvent.keyCode === KEY_RETURN) {
      setIsOpen(!isOpen);
      event.preventDefault();
    }
  };

  return (
    <div>
      <label htmlFor="Icon-label">
        <IconInformation data-show-focus-styles={focused} focusable onKeyDown={handleOnKeyDown} onMouseDown={() => { setFocus(false); }} onClick={handleOnClick} a11yLabel="Lab Results, Information Icon" tabIndex="0" role="button" aria-expanded={isOpen} aria-controls="toggle" id="Icon-label" />
        <span> Lab Results</span>
      </label>
      <Toggle isOpen={isOpen} isAnimated>
        <Table
          numberOfColumns={3}
          cellPaddingStyle="standard"
          dividerStyle="horizontal"
          headerData={{
            cells: [
              { id: 'header-Component', key: 'Component', children: 'BLOOD PRESSURE CATEGORY' },
              { id: 'header-Normal range', key: 'Normal range', children: 'SYSTOLIC mm Hg (upper number)' },
              { id: 'header-Results', key: 'Results', children: 'DIASTOLIC mm Hg (lower number)' },
            ],
          }}
          bodyData={[
            {
              rows: [
                {
                  key: 'row-0',
                  cells: [
                    { key: 'cell-0', children: 'NORMAL' },
                    { key: 'cell-1', children: 'LESS THAN 120' },
                    { key: 'cell-2', children: 'LESS THAN 80' },
                  ],
                },
                {
                  key: 'row-1',
                  cells: [
                    { key: 'cell-0', children: 'ELEVATED' },
                    { key: 'cell-1', children: '120 – 129' },
                    { key: 'cell-2', children: 'LESS THAN 80' },
                  ],
                },
                {
                  key: 'row-2',
                  cells: [
                    { key: 'cell-0', children: 'HIGH BLOOD PRESSURE (HYPERTENSION) STAGE 1' },
                    { key: 'cell-1', children: '130 – 139' },
                    { key: 'cell-2', children: '80 – 89' },
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

export default ToggleLabResults;
