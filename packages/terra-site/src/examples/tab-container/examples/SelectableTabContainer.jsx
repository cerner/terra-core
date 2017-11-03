import React from 'react';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Status from 'terra-status';
import SelectableTabContainer from 'terra-tab-container/lib/SelectableTabContainer';

class SelectableTabContainerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKey: '' };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedKey) {
    this.setState({ selectedKey });
  }

  render() {
    const labelTab = (
      <SelectableTabContainer.Tab label="Tab with label" isSelected key="LabelTab">
        <p>
          Content for the label tab.
        </p>
      </SelectableTabContainer.Tab>
    );

    const iconTab = (
      <SelectableTabContainer.Tab label="Tab with icon" icon={<IconBriefcase />} key="IconTab">
        <p>
          Content for the icon tab.
        </p>
      </SelectableTabContainer.Tab>
    );

    const customTab = (
      <SelectableTabContainer.Tab
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
      </SelectableTabContainer.Tab>
    );

    return (
      <div>
        <div id="current-selection">
          <h3>Last Triggered Tab: {this.state.selectedKey}</h3>
        </div>
        <SelectableTabContainer onChange={this.handleSelection}>
          {labelTab}
          {iconTab}
          {customTab}
        </SelectableTabContainer>
      </div>
    );
  }
}
export default SelectableTabContainerExample;
