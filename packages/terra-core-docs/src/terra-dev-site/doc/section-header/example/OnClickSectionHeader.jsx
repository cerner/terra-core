import React from 'react';
import SectionHeader from 'terra-section-header';

const sectionHeaderProps = {
  text: 'I\'m clickable, click me',
  onClick: () => {
    // eslint-disable-next-line no-alert
    window.alert('The accordion has been clicked!');
  },
};

const OnClickSectionHeader = () => (
  <div>
    <h2>OnClick Section Header</h2>
    <SectionHeader {...sectionHeaderProps} />
  </div>
);

export default OnClickSectionHeader;
