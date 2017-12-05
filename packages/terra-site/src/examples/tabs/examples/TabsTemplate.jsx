import React from 'react';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Status from 'terra-status';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';

const propTypes = {
  tabFill: PropTypes.bool,
  variant: PropTypes.string,
};

const StructuralTabsExample = (props) => {
  const labelTab = (
    <Tabs.Pane label="Tab with label" key="LabelTab">
      <TabContent label="Tab with label" />
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="IconTab">
      <TabContent label="Tab with icon" />
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
      <TabContent label="Custom display" />
    </Tabs.Pane>
  );

  const iconOnlyTab = (
    <Tabs.Pane
      icon={<IconBriefcase />}
      label="Icon Only"
      key="IconOnlyTab"
    >
      <TabContent label="Icon Only" />
    </Tabs.Pane>
  );

  const tab1 = (
    <Tabs.Pane
      label="Tab 1"
      key="Tab1"
    >
      <TabContent label="Tab 1" />
    </Tabs.Pane>
  );

  const tab2 = (
    <Tabs.Pane
      label="Tab 2"
      key="Tab2"
    >
      <TabContent label="Tab 2" />
    </Tabs.Pane>
  );

  const disabledTab = (
    <Tabs.Pane label="Disabled Tab" icon={<IconSearch />} isDisabled key="DisabledTab" />
  );

  return (
    <div style={{ padding: '10px' }}>
      <Tabs variant={props.variant} defaultActiveKey="LabelTab" tabFill={props.tabFill}>
        {labelTab}
        {iconTab}
        {customTab}
        {disabledTab}
        {iconOnlyTab}
        {tab1}
        {tab2}
      </Tabs>
    </div>
  );
};

StructuralTabsExample.propTypes = propTypes;
export default StructuralTabsExample;
