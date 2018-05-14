import React from 'react';
import Alert from 'terra-alert';
import IconHelp from 'terra-icon/lib/icon/IconHelp';

const CustomExample = () => (
  <Alert type={Alert.Opts.Types.CUSTOM} title="Help!" customStatusColor="orange" customIcon={<IconHelp />} >
    <span>This is a <i>custom</i> alert</span>
  </Alert>
);

export default CustomExample;
