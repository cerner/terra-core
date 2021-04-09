import React, { useRef, useState } from 'react';
import Popup from 'terra-popup';
import Pill from '../../../../Pill';

const DisclosureAndRemovablePill = () => {
  const [open, setOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(true);
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

  const handleOnRemove = () => {
    setIsRemoved(false);
  };

  return (
    <>
      {isRemoved && (
        <div>
          <Pill
            label="Demo"
            onSelect={handleOnSelect}
            onRemove={handleOnRemove}
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
        </div>
      )}
    </>
  );
};

export default DisclosureAndRemovablePill;
