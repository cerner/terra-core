import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import SectionHeaderExampleTemplate from 'terra-section-header/lib/terra-dev-site/doc/example/SectionHeaderExampleTemplate';

const sectionHeaderProps = {
  title: 'I\'m clickable, click me',
  onClick: () => {
    // eslint-disable-next-line no-alert
    window.alert('The accordion has been clicked!');
  },
};

const OnClickSectionHeader = () => <SectionHeaderExampleTemplate title="OnClick Section Header" exampleProps={sectionHeaderProps} />;

export default OnClickSectionHeader;
