import React from 'react';
import IconHelp from 'terra-icon/lib/icon/IconHelp';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Alert from 'terra-alert/lib/Alert';

const alertStartTagStr = '<Alert type="custom" title="Help!" customStatusColor="orange" customIcon={<IconHelp />} >';
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
        &nbsp;&nbsp;
        {alertContentStr}
        <br />
        {alertEndTagStr}
      </code>
    </div>
    <br />
    <Alert type="custom" title="Help!" customStatusColor="orange" customIcon={<IconHelp />}>
      <span>
This is a
        <i>custom</i>
        {' '}
alert
      </span>
    </Alert>
  </div>
);

export default CustomExample;
