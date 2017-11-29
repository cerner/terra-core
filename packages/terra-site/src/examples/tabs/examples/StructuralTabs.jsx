import React from 'react';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Status from 'terra-status';
import Tabs from 'terra-tabs';


const paneContentStyle = { height: '200px', padding: '10px' };

const propTypes = {
  tabFill: PropTypes.bool,
};

const StructuralTabsExample = (props) => {
  const labelTab = (
    <Tabs.Pane label="Tab with label" key="LabelTab">
      <div style={paneContentStyle}>
        Content for the label tab.
      </div>
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="IconTab">
      <div style={paneContentStyle}>
        Content for the icon tab.
      </div>
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
      <div style={paneContentStyle}>
        Content for the custom display tab.
      </div>
    </Tabs.Pane>
  );

  const disabledTab = (
    <Tabs.Pane label="Disabled Tab" icon={<IconSearch />} isDisabled key="DisabledTab" />
  );

  return (
    <div style={{ padding: '10px' }}>
      <Tabs variant="structural" defaultActiveKey="LabelTab" tabFill={props.tabFill}>
        {labelTab}
        {iconTab}
        {customTab}
        {disabledTab}
      </Tabs>
    </div>
  );
};

StructuralTabsExample.propTypes = propTypes;
export default StructuralTabsExample;
