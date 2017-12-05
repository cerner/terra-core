import React from 'react';
import TabPane from '../../../lib/TabPane';

const LongTextTabPane = () => (
  <div>
    <p>Tab with long text in the label. The label should truncate.</p>
    <TabPane
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eros quis erat tincidunt, id scelerisque magna ultricies. Vivamus pellentesque."
      id="longText"
    />
  </div>
);

export default LongTextTabPane;
