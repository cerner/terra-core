/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from 'terra-action-header/lib/ActionHeader';

export default () => (
  <ActionHeader
    text="Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long Title Action Header"
    onBack={() => alert('You clicked back!')}
    onClose={() => alert('You clicked close!')}
    level={1}
  />
);
