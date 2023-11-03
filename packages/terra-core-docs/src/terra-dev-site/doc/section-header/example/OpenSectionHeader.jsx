import React from 'react';
import SectionHeaderExampleTemplate from './SectionHeaderExampleTemplate';

const sectionHeaderProps = {
  text: 'Open',
  isOpen: true,
  onClick: () => {},
};

const OpenSectionheader = () => <SectionHeaderExampleTemplate exampleProps={sectionHeaderProps} />;

export default OpenSectionheader;
