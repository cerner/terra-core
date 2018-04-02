/* eslint-disable no-alert, import/no-extraneous-dependencies */
import React from 'react';
import ActionHeader from '../../lib/ActionHeader';

export default () => <ActionHeader title="Back Close Action Header" onBack={() => alert('You clicked back!')} onClose={() => alert('You clicked close!')} onPrevious={() => alert('You clicked previous!')} onNext={() => alert('You clicked next!')} />;
