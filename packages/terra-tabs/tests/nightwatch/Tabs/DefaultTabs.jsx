import React from 'react';
import Base from 'terra-base';
import Tabs from '../../../lib/Tabs';
import TabContent from './TabContentTemplate';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () => (
  <Base locale={locale}>
    <p>Default tabs</p>
    <Tabs id="defaultTabs">
      <Tabs.Pane label="Tab 1" key="Tab1" id="tab1">
        <TabContent label="Tab 1" id="tab1Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 2" key="Tab2" id="tab2">
        <TabContent label="Tab 2" id="tab2Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 3" key="Tab3" id="tab3">
        <TabContent label="Tab 3" id="tab3Content" />
      </Tabs.Pane>
    </Tabs>
  </Base>
);
