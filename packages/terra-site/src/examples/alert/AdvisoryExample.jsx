import React from 'react';
import Alert from 'terra-alert';

const alertText = 'This is an advisory alert';

const AdvisoryExample = () => (
  <Alert type={Alert.Opts.Types.ADVISORY} >{alertText}</Alert>
);

export default AdvisoryExample;
