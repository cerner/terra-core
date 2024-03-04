/* eslint-disable react/forbid-dom-props */
import React, { useState } from 'react';
import SectionHeader from 'terra-section-header';

const StickyTitleSectionHeader = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div style={{
      width: '400px', height: '200px', background: 'gray', margin: '10px', overflow: 'scroll',
    }}
    >
      <div style={{ width: '600px', height: '400px' }}>
        <SectionHeader
          text="Closed Section Header 1"
          isTitleSticky
          onClick={() => { setIsOpen1(!isOpen1); }}
          isOpen={isOpen1}
          boundedWidth="350"
        />
        <br />
        <SectionHeader
          text="Closed Section Header 2"
          isTitleSticky
          onClick={() => { setIsOpen2(!isOpen2); }}
          isOpen={isOpen2}
          boundedWidth="350"
        />
        <br />
        <SectionHeader
          text="Section Header 3"
          isTitleSticky
        />
      </div>
    </div>
  );
};

export default StickyTitleSectionHeader;
