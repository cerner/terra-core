import React from 'react';
import TabPane from '../../../../TabPane';

const LongTextTabPane = () => (
  <div role="tablist" style={{ display: 'flex' }}>
    <TabPane
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eros quis erat tincidunt, id scelerisque magna ultricies. Vivamus pellentesque."
      id="longText"
    />
  </div>
);

export default LongTextTabPane;
