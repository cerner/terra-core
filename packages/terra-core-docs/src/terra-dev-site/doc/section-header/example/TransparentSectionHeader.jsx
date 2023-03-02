import React from 'react';
import SectionHeaderExampleTemplate from './SectionHeaderExampleTemplate';

const sectionHeaderProps = {
  text: 'I\'m clickable, click me',
  onClick: () => {
    // eslint-disable-next-line no-alert
    window.alert('The accordion has been clicked!');
  },
  isTransparent: true,
};

const TransparentSectionHeader = () => <SectionHeaderExampleTemplate text="Transparent Section Header" exampleProps={sectionHeaderProps} />;

export default TransparentSectionHeader;
