import React from 'react';
import Alert from 'terra-alert';

const alertText = 'This is a warning';

const WarningExample = () => (
  <Alert type={Alert.Opts.Types.WARNING} >{alertText}</Alert>
);

export default WarningExample;
