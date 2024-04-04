import React from 'react';
import SectionHeader from 'terra-section-header';

const sectionHeaderProps = {
  text: 'Closed',
  onClick: () => {},
};

const ClosedSectionHeader = () => (
  <div>
    <h2>Closed Section Header</h2>
    <SectionHeader {...sectionHeaderProps} />
  </div>
);

export default ClosedSectionHeader;
