import React from 'react';
import Alert from 'terra-alert';

const alertText = 'This is an information alert';

const InfoExample = () => (
  <Alert type={Alert.Opts.Types.INFO} >{alertText}</Alert>
);

export default InfoExample;
