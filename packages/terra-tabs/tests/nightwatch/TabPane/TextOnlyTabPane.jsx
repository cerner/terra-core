import React from 'react';
import TabPane from '../../../lib/TabPane';

const TextOnlyTabPane = () => (
  <div>
    <p>Only text in the label.</p>
    <TabPane
      label="Text only"
      id="textOnly"
    />
  </div>
);

export default TextOnlyTabPane;
