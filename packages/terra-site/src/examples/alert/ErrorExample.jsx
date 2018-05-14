import React from 'react';
import Alert from 'terra-alert';

const alertText = 'This is an error';

const ErrorExample = () => (
  <Alert type={Alert.Opts.Types.ERROR} >{alertText}</Alert>
);

export default ErrorExample;
