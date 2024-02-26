/* eslint-disable react/forbid-dom-props */
import React from 'react';
import SectionHeader from 'terra-section-header';

export default () => (
  <div style={{
    width: '400px', height: '200px', background: 'gray', margin: '10px', overflow: 'scroll',
  }}
  >
    <div style={{ width: '600px', height: '400px' }}>
      <SectionHeader
        text="Closed Section Header 1"
        isTitleSticky
        onClick={() => {}}
        boundedWidth="350"
      />
      <br />
      <SectionHeader
        text="Closed Section Header 2"
        isTitleSticky
        onClick={() => {}}
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
