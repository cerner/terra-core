import React, { useRef, useState } from 'react';
import uniqueid from 'lodash.uniqueid';
import Popup from 'terra-popup';
import PillList, { Pill } from 'terra-pills';
import Spacer from 'terra-spacer';

const DisclosurePill = () => {
  const [open, setOpen] = useState(false);
  const pillRef = useRef();
  const disclosurePillId = `terra-pills-example-disclosure-pill-${uniqueid()}`;
  const disclosurePopupId = `terra-pills-example-disclosure-popup-${uniqueid()}`;

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
    <PillList
      ariaLabel="Example of a Basic Pill with a Popup"
    >
      <Pill
        label="Daniel Williams"
        id={disclosurePillId}
        onSelect={handleOnSelect}
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
    </PillList>
  );
};

export default DisclosurePill;
