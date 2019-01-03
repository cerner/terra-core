import React from 'react';
import Button from 'terra-button';
import IconDiamond from 'terra-icon/lib/icon/IconDiamond';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';

const GlyphNotFitExample = (
  <StatusView
    style={{ height: '220px', width: '500px', overflow: 'auto' }}
    variant="error"
    message="An exception was thrown"
    customGlyph={<IconDiamond />}
    title="500"
  >
    <Button text="OK" key="1" size="medium" />
    <Button text="Cancel" key="2" size="medium" />
  </StatusView>
);

export default GlyphNotFitExample;
