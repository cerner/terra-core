import React from 'react';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Status from 'terra-status';
import Tabs from 'terra-tabs';

class SelectableTabsExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 'LabelTab' };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedKey) {
    if (selectedKey !== this.state.activeKey) {
      this.setState({ activeKey: selectedKey });
    }
  }

  render() {
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
        <div id="current-selection">
          <h3>Last Triggered Tab: {this.state.activeKey}</h3>
        </div>
        <Tabs onChange={this.handleSelection} activeKey={this.state.activeKey}>
          {labelTab}
          {iconTab}
          {customTab}
        </Tabs>
      </div>
    );
  }
}
export default SelectableTabsExample;
