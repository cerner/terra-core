import React from 'react';
import SectionHeader from 'terra-section-header';

const sectionHeaderProps = {
  text: 'Open',
  isOpen: true,
  onClick: () => {},
};

const OpenSectionheader = () => (
  <div>
    <h2>Open Section Header</h2>
    <SectionHeader {...sectionHeaderProps} />
  </div>
);

export default OpenSectionheader;
