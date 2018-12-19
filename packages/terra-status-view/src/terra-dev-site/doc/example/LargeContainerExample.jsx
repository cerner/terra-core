import React from 'react';
import Button from 'terra-button';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusViewTemplate from '../example/StatusViewTemplate';

const LargeContainerExample = (
  <StatusViewTemplate
    style={{ height: '500px', width: '500px' }}
    variant="error"
    message="An exception was thrown"
    customGlyph={<IconDiamond />}
    title="500"
  >
    <Button text="OK" key="1" size="medium" />
    <Button text="Cancel" key="2" size="medium" />
  </StatusViewTemplate>
);

export default LargeContainerExample;
