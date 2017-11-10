import React from 'react';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Status from 'terra-status';
import Tabs from 'terra-tabs';

const ModularTabsExample = () => {
  const labelTab = (
    <Tabs.Pane label="Tab with label" key="LabelTab">
      <p>
        Content for the label tab.
      </p>
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="IconTab">
      <p>
        Content for the icon tab.
      </p>
    </Tabs.Pane>
  );

  const customTab = (
    <Tabs.Pane
      customDisplay={(
        <Status color="blue">
          Custom display
        </Status>
      )}
      label="Custom display"
      key="CustomTab"
    >
      <p>
        Content for the custom display tab.
      </p>
    </Tabs.Pane>
  );

  const tab1 = (
    <Tabs.Pane label="Tab 1" key="1">
      <p>
        Content for the tab 1.
      </p>
    </Tabs.Pane>
  );

  const tab2 = (
    <Tabs.Pane label="Tab 2" key="2">
      <p>
        Content for the tab 2.
      </p>
    </Tabs.Pane>
  );

  const tab3 = (
    <Tabs.Pane label="Tab 3" key="3">
      <p>
        Content for the tab 3.
      </p>
    </Tabs.Pane>
  );

  const tab4 = (
    <Tabs.Pane label="Tab 4" key="4">
      <p>
        Content for the tab 4.
      </p>
    </Tabs.Pane>
  );

  const tab5 = (
    <Tabs.Pane label="Tab 5" key="5">
      <p>
        Content for the tab 5.
      </p>
    </Tabs.Pane>
  );

  const tab6 = (
    <Tabs.Pane label="Tab 6" key="6">
      <p>
        Content for the tab 6.
      </p>
    </Tabs.Pane>
  );

  return (
    <div>
      <Tabs variant="modular" defaultActiveKey="LabelTab">
        {labelTab}
        {iconTab}
        {customTab}
        {tab1}
        {tab2}
        {tab3}
        {tab4}
        {tab5}
        {tab6}
      </Tabs>
    </div>
  );
};

export default ModularTabsExample;
