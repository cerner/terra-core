import React from 'react';
import Alert from 'terra-alert';

const alertText = 'This is an alert';

const AlertExample = () => (
  <Alert type={Alert.Opts.Types.ALERT} >{alertText}</Alert>
);

export default AlertExample;
