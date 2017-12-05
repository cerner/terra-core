import React from 'react';

// Example Files
import TabsTemplate from '../examples/TabsTemplate';
import TabsWithFilledContent from '../examples/TabsWithFilledContent';
import IconOnlyTabs from '../examples/IconOnlyTabs';

const TabsExamples = () => (
  <div style={{ backgroundColor: 'lightgrey' }}>
    <h2>Modular Centered Tabs</h2>
    <h3>Compact</h3>
    <TabsTemplate variant="modular-centered" />
    <h3>Expanded</h3>
    <TabsTemplate variant="modular-centered" tabFill />
    <h3>Icon Only</h3>
    <IconOnlyTabs variant="modular-centered" />
    <h3>Fill Parent Container</h3>
    <TabsWithFilledContent variant="modular-centered" fill />
  </div>
);

export default TabsExamples;
