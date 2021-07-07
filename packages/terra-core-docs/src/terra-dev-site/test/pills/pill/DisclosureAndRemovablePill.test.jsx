import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import { Pill } from 'terra-pills';
import styles from '../pill-list/PillListTestCommon.module.scss';

const cx = classNames.bind(styles);

const DisclosureAndRemovablePill = () => {
  const [open, setOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(true);
  const pillRef = useRef();
  const disclosurePillId = 'test-disclosure-pill';
  const disclosurePopupId = 'test-disclosure-popup';

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
    <div className={cx('spacing-wrapper')}>
      {isRemoved && (
        <>
          <Pill
            label="Label"
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
            contentHeight="80"
            contentWidth="160"
          >
            <p id={disclosurePopupId} aria-labelledby={disclosurePillId}>Demo Popup</p>
          </Popup>
        </>
      )}
    </div>
  );
};

export default DisclosureAndRemovablePill;
