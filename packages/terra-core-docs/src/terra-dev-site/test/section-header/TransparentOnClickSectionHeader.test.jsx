import React from 'react';
import SectionHeader from 'terra-section-header';

const TransparentOnClickSectionHeader = () => (
  <SectionHeader
    title="Transparent OnClick Section Header"
    // eslint-disable-next-line no-alert
    onClick={() => { window.alert('The accordion has been clicked!'); }}
    data-id="section-header"
    isTransparent
  />
);

export default TransparentOnClickSectionHeader;
