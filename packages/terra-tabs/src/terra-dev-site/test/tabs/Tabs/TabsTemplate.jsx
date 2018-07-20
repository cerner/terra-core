import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../../../Tabs';
import TabContent from './TabContentTemplate';

const propTypes = {
  fill: PropTypes.bool,
  tabFill: PropTypes.bool,
  id: PropTypes.string,
  containerHeight: PropTypes.string,
};

const defaultProps = {
  containerHeight: 'auto',
};

const TabsTemplate = props => (
  <div style={{ height: props.containerHeight }}>
    <Tabs
      tabFill={props.tabFill}
      fill={props.fill}
      id={props.id}
    >
      <Tabs.Pane label="Tab 1" key="Tab1" id="tab1">
        <TabContent label="Tab 1" id="tab1Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 2" key="Tab2" id="tab2">
        <TabContent label="Tab 2" id="tab2Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Disabled Tab" key="disabled" id="disabled" isDisabled />
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
        <TabContent label="Tab 8" id="tab8Content" />
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
  </div>
);

TabsTemplate.propTypes = propTypes;
TabsTemplate.defaultProps = defaultProps;
export default TabsTemplate;
