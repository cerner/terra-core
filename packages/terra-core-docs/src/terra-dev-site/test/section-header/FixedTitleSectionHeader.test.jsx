/* eslint-disable react/forbid-dom-props */
import React from 'react';
import SectionHeader from 'terra-section-header';

export default () => (
  <div style={{
    width: '400px', height: '200px', background: 'gray', margin: '10px', overflow: 'scroll',
  }}
  >
    <div style={{ width: '600px' }}>
      <SectionHeader
        text="Closed Section Header"
        isTitleFixed
        onClick={() => {}}
      />
    </div>
  </div>
);
