/* eslint-disable no-alert, import/no-extraneous-dependencies */
import React from 'react';
import ActionHeader from '../../lib/ActionHeader';

export default () => <ActionHeader title="Keep Closed Action Header" keepCloseButton onClose={() => alert('You clicked close!')} />;
