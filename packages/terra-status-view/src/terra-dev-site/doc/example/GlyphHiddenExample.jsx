import React from 'react';
import Button from 'terra-button';
import StatusViewTemplate from '../example/StatusViewTemplate';

const GlyphHiddenExample = (
  <StatusViewTemplate
    style={{ width: '500px' }}
    variant="error"
    message="An exception was thrown"
    isGlyphHidden
    title="500"
  >
    <Button text="OK" key="1" size="medium" />
    <Button text="Cancel" key="2" size="medium" />
  </StatusViewTemplate>
);

export default GlyphHiddenExample;
