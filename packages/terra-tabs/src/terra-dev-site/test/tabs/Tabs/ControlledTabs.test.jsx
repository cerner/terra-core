import React from 'react';
import Tabs from '../../../../Tabs';
import TabContent from './TabContentTemplate';

class ControlledTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 'Tab2' };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedKey) {
    if (selectedKey !== this.state.activeKey) {
      this.setState({ activeKey: selectedKey });
    }
  }

  render() {
    const tab1 = (
      <Tabs.Pane label="Tab 1" key="Tab1" id="tab1">
        <TabContent label="Tab 1" id="tab1Content" />
      </Tabs.Pane>
    );

    const tab2 = (
      <Tabs.Pane label="Tab 2" key="Tab2" id="tab2">
        <TabContent label="Tab 2" id="tab2Content" />
      </Tabs.Pane>
    );

    const tab3 = (
      <Tabs.Pane label="Tab 3" key="Tab 3" id="tab3">
        <TabContent label="Tab 3" id="tab3Content" />
      </Tabs.Pane>
    );

    return (
      <div>
        <div id="current-selection">
          <p>
Last Triggered Tab:
            {this.state.activeKey}
          </p>
        </div>
        <Tabs id="controlledTabs" onChange={this.handleSelection} activeKey={this.state.activeKey}>
          {tab1}
          {tab2}
          {tab3}
        </Tabs>
      </div>
    );
  }
}
export default ControlledTabs;
