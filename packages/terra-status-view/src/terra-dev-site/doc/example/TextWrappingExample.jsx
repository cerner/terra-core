import React from 'react';
import Button from 'terra-button';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusViewTemplate from '../example/StatusViewTemplate';

const TextWrappingExample = (
  <StatusViewTemplate
    style={{ width: '500px' }}
    variant="error"
    title="A 500 error was thrown from the service.  Retry again later when new service is deployed at a later date in the future."
    message="A null pointer exception was thrown from the input parameters.  The params of min and max-value were not present.  They need to be present for verification purposes for keeping the database clean and consistent"
    customGlyph={<IconDiamond />}
  >
    <Button text="OK, here is some really really long text to make the button take up a bunch of space." key="1" size="medium" />
    <Button text="Cancel, here is some really really long text to make the button take up a bunch of space." key="2" size="medium" />
  </StatusViewTemplate>
);

export default TextWrappingExample;
