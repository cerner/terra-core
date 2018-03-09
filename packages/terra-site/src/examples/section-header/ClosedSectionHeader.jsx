import React from 'react';

import SectionHeaderExampleTemplate from './SectionHeaderExampleTemplate';

const sectionHeaderProps = {
  title: 'Closed',
  onClick: () => {},
};

const ClosedSectionHeader = () => <SectionHeaderExampleTemplate title="Closed Section Header" exampleProps={sectionHeaderProps} />;

export default ClosedSectionHeader;
