import React from 'react';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Tabs from 'terra-tabs/lib/Tabs';
import TabContentTemplate from 'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const propTypes = {
  tabFill: PropTypes.bool,
};

const TabsTemplate = (props) => {
  const labelTab = (
    <Tabs.Pane label="Tab with label" key="LabelTab">
      <TabContentTemplate label="Tab with label" />
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="IconTab">
      <TabContentTemplate label="Tab with icon" />
    </Tabs.Pane>
  );

  const customTab = (
    <Tabs.Pane
      customDisplay={(
        <div
          style={{
            color: 'red',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          Custom display
        </div>
      )}
      label="Custom display"
      key="CustomTab"
    >
      <TabContentTemplate label="Custom display" />
    </Tabs.Pane>
  );

  const longLabel = (
    <Tabs.Pane
      label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      key="longLabel"
    >
      <TabContentTemplate label="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
    </Tabs.Pane>
  );

  const lastTab = (
    <Tabs.Pane label="Last Tab" key="lastTab">
      <TabContentTemplate label="Last Tab" />
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
        {lastTab}
      </Tabs>
    </div>
  );
};

TabsTemplate.propTypes = propTypes;
export default TabsTemplate;
