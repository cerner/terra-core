import React from 'react';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Status from 'terra-status';
import TabContainer from 'terra-tab-container';

const ModularTabContainerExample = () => {
  const labelTab = (
    <TabContainer.Tab label="Tab with label" isSelected key="LabelTab">
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

  return (
    <div>
      <TabContainer variant="modular">
        {labelTab}
        {iconTab}
        {customTab}
      </TabContainer>
    </div>
  );
};

export default ModularTabContainerExample;
