/* eslint-disable no-alert */
import React from 'react';
import ActionHeader from '../../../ActionHeader';

export default () => (
  <ActionHeader
    title="Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Very Long Title Action Header"
    onBack={() => alert('You clicked back!')}
    onClose={() => alert('You clicked close!')}
  />
);
