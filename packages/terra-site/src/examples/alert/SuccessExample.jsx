import React from 'react';
import Alert from 'terra-alert';

const alertText = 'This is a success alert';

const SuccessExample = () => (
  <Alert type={Alert.Opts.Types.SUCCESS} >{alertText}</Alert>
);

export default SuccessExample;
