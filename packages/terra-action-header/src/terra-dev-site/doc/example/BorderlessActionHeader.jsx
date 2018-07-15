/* eslint-disable no-alert */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
// import ActionHeader from 'terra-action-header/lib/ActionHeader';
import ActionHeader from '../../../ActionHeader';

const ActionHeaderExample = () => (
  <div>
    <br />
    <ActionHeader
      title="Borderless Action Header"
      isBorderless
      onClose={() => alert('You clicked close!')}
      onMaximize={() => alert('You clicked maximize!')}
    />
    <br />
  </div>
);

export default ActionHeaderExample;
/* eslint-enable no-alert */
