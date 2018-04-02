/* eslint-disable no-alert, import/no-extraneous-dependencies */
import React from 'react';
import ActionHeader from '../../lib/ActionHeader';

export default () => <ActionHeader title="Maximize Close Action Header" onMaximize={() => alert('You clicked maximize!')} onClose={() => alert('You clicked close!')} />;
