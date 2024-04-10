import React from 'react';
import SectionHeader from 'terra-section-header';

const sectionHeaderProps = {
  text: "I'm clickable, click me",
  onClick: () => {
    window.alert('The accordion has been clicked!');
  },
  isTransparent: true,
};

const TransparentSectionHeader = () => (
  <div>
    <h2>Transparent Section Header</h2>
    <SectionHeader {...sectionHeaderProps} />
  </div>
);

export default TransparentSectionHeader;
