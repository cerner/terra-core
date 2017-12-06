import React from 'react';
import Base from 'terra-base';
import Tabs from '../../../lib/Tabs';
import TabContent from './TabContentTemplate';

const locale = document.getElementsByTagName('html')[0].getAttribute('lang');

export default () => (
  <Base locale={locale}>
    <p>Many tabs. Tabs should collapse into more menu individually when there is not enough room to display them all at their mimum widths, until the tiny breakpoint, where they will all collapse.</p>
    <Tabs id="manyTabs">
      <Tabs.Pane label="Tab 1" key="Tab1" id="tab1">
        <TabContent label="Tab 1" id="tab1Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 2" key="Tab2" id="tab2">
        <TabContent label="Tab 2" id="tab2Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 3" key="Tab3" id="tab3">
        <TabContent label="Tab 3" id="tab3Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 4" key="Tab4" id="tab4">
        <TabContent label="Tab 4" id="tab4Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 5" key="Tab5" id="tab5">
        <TabContent label="Tab 5" id="tab5Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 6" key="Tab6" id="tab6">
        <TabContent label="Tab 6" id="tab6Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 7" key="Tab7" id="tab7">
        <TabContent label="Tab 7" id="tab7Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 8 with longer text that should truncate" key="Tab8" id="tab8">
        <TabContent label="Tab 2" id="tab2Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 9" key="Tab9" id="tab9">
        <TabContent label="Tab 9" id="tab9Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 10" key="Tab10" id="tab10">
        <TabContent label="Tab 10" id="tab10Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 11" key="Tab11" id="tab11">
        <TabContent label="Tab 11" id="tab11Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 12" key="Tab12" id="tab12">
        <TabContent label="Tab 12" id="tab12Content" />
      </Tabs.Pane>
    </Tabs>
  </Base>
);
