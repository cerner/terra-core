import React, { useRef, useState } from 'react';
import uniqueid from 'lodash.uniqueid';
import Popup from 'terra-popup';
import PillList, { Pill } from 'terra-pills';
import Spacer from 'terra-spacer';

const DisclosureAndRemovablePill = () => {
  const [open, setOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(true);
  const pillRef = useRef();
  const disclosurePillId = `terra-pills-example-disclosure-removable-pill-${uniqueid()}`;
  const disclosurePopupId = `terra-pills-example-disclosure-removable-popup-${uniqueid()}`;

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
    <PillList
      ariaLabel="Example of a Basic Pill with a Popup"
    >
      {isRemoved && (
        <>
          <Pill
            label="Daniel Williams"
            id={disclosurePillId}
            onSelect={handleOnSelect}
            onRemove={handleOnRemove}
            refCallback={setPillNode}
            ariaHasPopup
            ariaExpanded={open}
            ariaControls={disclosurePopupId}
          />
          <Popup
            isOpen={open}
            isArrowDisplayed
            targetRef={getPillNode}
            onRequestClose={handleOnRequestClose}
            contentHeight="40"
            contentWidth="240"
          >
            <Spacer padding="medium" id={disclosurePopupId} aria-labelledby={disclosurePillId}>
              - Sample Popup Content -
            </Spacer>
          </Popup>
        </>
      )}
    </PillList>
  );
};

export default DisclosureAndRemovablePill;
