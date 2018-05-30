import React from 'react';
import TabPane from '../../../../TabPane';

const TextOnlyTabPane = () => (
  <div role="tablist" style={{ display: 'flex' }}>
    <TabPane
      label="Text only tab pane"
      id="textOnly"
    />
  </div>
);

export default TextOnlyTabPane;
