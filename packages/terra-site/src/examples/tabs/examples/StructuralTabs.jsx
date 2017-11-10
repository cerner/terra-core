import React from 'react';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Status from 'terra-status';
import Tabs from 'terra-tabs';

const StructuralTabsExample = () => {
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

  return (
    <div>
      <Tabs variant="structural" defaultActiveKey="LabelTab">
        {labelTab}
        {iconTab}
        {customTab}
      </Tabs>
    </div>
  );
};

export default StructuralTabsExample;
