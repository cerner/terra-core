import React, { useRef } from 'react';
import SectionHeader from 'terra-section-header';

const FocusSectionHeader = () => {
  const sectionHeader = useRef();

  const sectionHeaderRef = (header) => {
    sectionHeader.current = header;
  };

  const handleClick = () => {
    sectionHeader.current.setFocus();
  };

  return (
    <>
      <button type="button" onClick={handleClick}>Select Header</button>

      {/* eslint-disable-next-line react/forbid-dom-props */}
      <div style={{ marginTop: '20px' }}>
        <SectionHeader ref={sectionHeaderRef} text="Focusable Section Header" level={2} onClick={() => {}} />
      </div>
    </>
  );
};

export default FocusSectionHeader;
