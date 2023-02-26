import React from 'react';
import SectionHeaderExampleTemplate from './SectionHeaderExampleTemplate';

const sectionHeaderProps = {
  text: 'Open',
  isOpen: true,
  onClick: () => {},
};

const OpenSectionheader = () => <SectionHeaderExampleTemplate text="Open Section Header" exampleProps={sectionHeaderProps} />;

export default OpenSectionheader;
