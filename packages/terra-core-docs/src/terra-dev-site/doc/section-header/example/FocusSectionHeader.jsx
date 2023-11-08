import React, { useRef } from 'react';
import SectionHeader from 'terra-section-header';

const FocusSectionHeader = () => {
  const sectionHeaderRef = useRef();

  const handleClick = () => {
    sectionHeaderRef.current?.focus();
  };

  return (
    <>
      <button type="button" onClick={handleClick}>Select Header</button>

      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div style={{ marginTop: '20px' }}>
        <SectionHeader refCallback={sectionHeaderRef} text="Focusable Section Header" level={2} onClick={() => {}} />
      </div>
    </>
  );
};

export default FocusSectionHeader;
