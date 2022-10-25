import React from 'react';
import SectionHeaderExampleTemplate from './SectionHeaderExampleTemplate';

const sectionHeaderProps = {
  text: 'Closed',
  onClick: () => {},
};

const ClosedSectionHeader = () => <SectionHeaderExampleTemplate title="Closed Section Header" exampleProps={sectionHeaderProps} />;

export default ClosedSectionHeader;
