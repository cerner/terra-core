import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import Pill from '../../../../Pill';

const DisclosurePill = () => {
  const [open, setOpen] = useState(false);
  const pillRef = useRef();

  const setPillNode = (node) => {
    pillRef.current = node;
  };

  const getPillNode = () => pillRef.current;

  const handleOnSelect = () => {
    setOpen(true);
  };

  const handleOnRequestClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Pill
        label="Demo"
        onSelect={handleOnSelect}
        refCallback={setPillNode}
      />
      <Popup
        isOpen={open}
        isArrowDisplayed
        targetRef={getPillNode}
        onRequestClose={handleOnRequestClose}
        contentHeight="160"
        contentWidth="160"
      >
        <p>Demo Popup</p>
      </Popup>
    </>
  );
};

export default DisclosurePill;
