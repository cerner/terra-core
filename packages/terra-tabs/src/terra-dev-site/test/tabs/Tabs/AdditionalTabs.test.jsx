import React from 'react';
import Tabs from '../../../../Tabs';
import TabContent from './TabContentTemplate';

class AdditionalTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: 'Tab1', showAdditionalTab: false };
    this.handleSelection = this.handleSelection.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSelection(event, selectedKey) {
    if (selectedKey !== this.state.activeKey) {
      this.setState({ activeKey: selectedKey });
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      showAdditionalTab: !prevState.showAdditionalTab,
      activeKey: prevState.activeKey === 'Tab4' ? 'Tab1' : prevState.activeKey
    }));
  }

  render() {
    const tabs = [];
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
      <Tabs.Pane label="Tab 3" key="Tab3" id="tab3">
        <TabContent label="Tab 3" id="tab3Content" />
      </Tabs.Pane>
    );
    tabs.push(tab1);
    tabs.push(tab2);
    tabs.push(tab3);

    if (this.state.showAdditionalTab) {
      const tab4 = (
        <Tabs.Pane label="Tab 4" key="Tab4" id="tab4">
          <TabContent label="Tab 4" id="tab4Content" />
        </Tabs.Pane>
      );
      tabs.push(tab4);
    }

    return (
      <div>
        <button id="toggleButton" onClick={this.handleClick}>{this.state.showAdditionalTab ? "Hide" : "Show"}</button>
        <Tabs id="addtionalTabs" onChange={this.handleSelection} activeKey={this.state.activeKey}>
          {tabs}
        </Tabs>
      </div>
    );
  }
}
export default AdditionalTabs;
