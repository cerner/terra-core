import React from 'react';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Status from 'terra-status';
import TabContainer from 'terra-tab-container';

class SelectableTabContainerExample extends React.Component {
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

    return (
      <div>
        <div id="current-selection">
          <h3>Last Triggered Tab: {this.state.activeKey}</h3>
        </div>
        <TabContainer onChange={this.handleSelection} activeKey={this.state.activeKey}>
          {labelTab}
          {iconTab}
          {customTab}
        </TabContainer>
      </div>
    );
  }
}
export default SelectableTabContainerExample;
