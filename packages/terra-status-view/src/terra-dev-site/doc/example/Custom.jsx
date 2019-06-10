import React from 'react';
import Button from 'terra-button';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';

const Custom = (
  <StatusView
    message="Custom Message"
    customGlyph={<IconDiamond />}
    title="Custom Title"
  >
    <Button text="Action 1" key="1" size="medium" />
    <Button text="Action 2" key="2" size="medium" />
  </StatusView>
);

export default Custom;
