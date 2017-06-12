import React from 'react';
import Alert from 'terra-alert';
import IconHelp from 'terra-icon/lib/icon/IconHelp';

const alertStartTagStr = '<Alert type={Alert.Types.CUSTOM} title="Help!" customStatusColor="orange" customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} >';
const alertEndTagStr = '</Alert>';
const alertContentStr = 'This is a <u>custom</u> alert';

const CustomExample = () => (
  <div>
    <div dir="ltr">
      <h3>Alert of type custom with custom title, status color, and icon, and includes HTML in message</h3>
      <br />
      <code>
        {alertStartTagStr}
        <br />
        &nbsp;&nbsp;{alertContentStr}
        <br />
        {alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type={Alert.Types.CUSTOM} title="Help!" customStatusColor="orange" customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} >
      This is a <u>custom</u> alert
    </Alert>
  </div>
);

export default CustomExample;
