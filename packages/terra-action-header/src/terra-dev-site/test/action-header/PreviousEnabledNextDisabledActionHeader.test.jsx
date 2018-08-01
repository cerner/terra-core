/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../../ActionHeader';

const ActionHeaderExample = () => (
  <ActionHeader
    title="Previous Enabled Next Disabled Action Header"
    onPrevious={() => alert('You clicked previous!')}
  />
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
