import React from 'react';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Status from 'terra-status';
import TabContainer from 'terra-tab-container';

const ModularTabContainerExample = () => {
  const labelTab = (
    <TabContainer.Tab label="Tab with label" key="LabelTab">
      <p>
        Content for the label tab.
      </p>
    </TabContainer.Tab>
  );

  const iconTab = (
    <TabContainer.Tab label="Tab with icon" icon={<IconBriefcase />} key="IconTab">
      <p>
        Content for the icon tab.
      </p>
    </TabContainer.Tab>
  );

  const customTab = (
    <TabContainer.Tab
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
    </TabContainer.Tab>
  );

  const tab1 = (
    <TabContainer.Tab label="Tab 1" key="1">
      <p>
        Content for the tab 1.
      </p>
    </TabContainer.Tab>
  );

  const tab2 = (
    <TabContainer.Tab label="Tab 2" key="2">
      <p>
        Content for the tab 2.
      </p>
    </TabContainer.Tab>
  );

  const tab3 = (
    <TabContainer.Tab label="Tab 3" key="3">
      <p>
        Content for the tab 3.
      </p>
    </TabContainer.Tab>
  );

  const tab4 = (
    <TabContainer.Tab label="Tab 4" key="4">
      <p>
        Content for the tab 4.
      </p>
    </TabContainer.Tab>
  );

  const tab5 = (
    <TabContainer.Tab label="Tab 5" key="5">
      <p>
        Content for the tab 5.
      </p>
    </TabContainer.Tab>
  );

  const tab6 = (
    <TabContainer.Tab label="Tab 6" key="6">
      <p>
        Content for the tab 6.
      </p>
    </TabContainer.Tab>
  );

  const tab7 = (
    <TabContainer.Tab label="Tab 7" key="7">
      <p>
        Content for the tab 7.
      </p>
    </TabContainer.Tab>
  );

  const tab8 = (
    <TabContainer.Tab label="Tab 8" key="8">
      <p>
        Content for the tab 8.
      </p>
    </TabContainer.Tab>
  );

  return (
    <div>
      <TabContainer variant="modular" defaultActiveKey="LabelTab">
        {labelTab}
        {iconTab}
        {customTab}
        {tab1}
        {tab2}
        {tab3}
        {tab4}
        {tab5}
        {tab6}
        {tab7}
        {tab8}
      </TabContainer>
    </div>
  );
};

export default ModularTabContainerExample;
