import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SectionHeaderExampleTemplate from 'terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate';

const sectionHeaderProps = {
  title: 'Closed',
  onClick: () => {},
};

const ClosedSectionHeader = () => <SectionHeaderExampleTemplate title="Closed Section Header" exampleProps={sectionHeaderProps} />;

export default ClosedSectionHeader;
