import React from 'react';
import Alert, { AlertTypes } from 'terra-alert';
import IconHelp from 'terra-icon/lib/icon/IconHelp';

const CustomExample = () => (
  <div>
    <h3>Alert of type custom with custom title, status color, and icon, and includes HTML in message</h3>
    <br />
    <code>
      &lt;Alert type=&#x007B;AlertTypes.CUSTOM&#x007D; title=&quot;Help!&quot; customStatusColor=&quot;orange&quot; customIcon=&#x007B;&lt;IconHelp height=&quot;1.3333rem&quot; width=&quot;1.3333rem&quot; /&gt;&#x007D; &gt;
        <br />
        &nbsp;&nbsp;This is a &lt;u&gt;custom&lt;/u&gt; alert
        <br />
      &lt;/Alert&gt;
    </code>
    <br /><br />
    <Alert type={AlertTypes.CUSTOM} title="Help!" customStatusColor="orange" customIcon={<IconHelp height="1.3333rem" width="1.3333rem" />} >
      This is a <u>custom</u> alert
    </Alert>
  </div>
);

export default CustomExample;
