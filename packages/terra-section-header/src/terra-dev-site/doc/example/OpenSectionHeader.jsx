import React from 'react';
import SectionHeaderExampleTemplate from 'terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate';

const sectionHeaderProps = {
  title: 'Open',
  isOpen: true,
  onClick: () => {},
};

const OpenSectionheader = () => <SectionHeaderExampleTemplate title="Open Section Header" exampleProps={sectionHeaderProps} />;

export default OpenSectionheader;
