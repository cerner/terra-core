import React from 'react';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';

const propTypes = {
  tabFill: PropTypes.bool,
};

const TabsTemplate = (props) => {
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
        <div style={{ color: 'red' }}>
          Custom display
        </div>
      )}
      label="Custom display"
      key="CustomTab"
    >
      <TabContent label="Custom display" />
    </Tabs.Pane>
  );

  const longLabel = (
    <Tabs.Pane
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      key="longLabel"
    >
      <TabContent label="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </Tabs.Pane>
  );

  const tab1 = (
    <Tabs.Pane label="Tab 1" key="tab1">
      <TabContent label="Tab 1" />
    </Tabs.Pane>
  );

  const disabledTab = (
    <Tabs.Pane label="Disabled Tab" icon={<IconSearch />} isDisabled key="DisabledTab" />
  );

  return (
    <div style={{ padding: '10px' }}>
      <Tabs defaultActiveKey="LabelTab" tabFill={props.tabFill}>
        {labelTab}
        {iconTab}
        {customTab}
        {disabledTab}
        {longLabel}
        {tab1}
      </Tabs>
    </div>
  );
};

TabsTemplate.propTypes = propTypes;
export default TabsTemplate;
