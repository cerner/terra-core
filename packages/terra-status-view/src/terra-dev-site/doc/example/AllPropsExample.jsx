import React from 'react';
import Button from 'terra-button';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';

const AllPropsExample = (
  <StatusView
    style={{ width: '500px' }}
    variant="no-data"
    title="500"
    message="An exception was thrown"
    customGlyph={<IconDiamond />}
  >
    <Button text="OK" key="1" size="medium" />
    <Button text="Cancel" key="2" size="medium" />
  </StatusView>
);

export default AllPropsExample;
