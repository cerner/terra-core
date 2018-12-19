import React from 'react';
import Button from 'terra-button';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
import StatusViewTemplate from '../example/StatusViewTemplate';

const AllPropsExample = (
  <StatusViewTemplate
    style={{ width: '500px' }}
    variant="no-data"
    title="500"
    message="An exception was thrown"
    customGlyph={<IconDiamond />}
  >
    <Button text="OK" key="1" size="medium" />
    <Button text="Cancel" key="2" size="medium" />
  </StatusViewTemplate>
);

export default AllPropsExample;
