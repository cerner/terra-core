import React from 'react';
import SectionHeader from '../../../SectionHeader';

const OnClickSectionHeader = () => (
  <SectionHeader
    title="OnClick Section Header"
    // eslint-disable-next-line no-alert
    onClick={() => { window.alert('The accordion has been clicked!'); }}
    className="onClickHeader"
  />
);

export default OnClickSectionHeader;
