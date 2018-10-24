# Terra Tabs

Tabs are containers used to organize content. They allow for quick switching between groups of contextually related content. Content is divided into different containers and each container is viewable one at a time. The user can switch between containers by selecting the corresponding tab control.

Tabs are meant to organize content as to provide quick access to a group of contextually related content that does not need to be compared or accessed simultaneously. Tabs are not intended for navigation.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-tabs`

## Usage

### Note
The tabs component will apply the prop `isLabelHidden` to all components passed as content for Tabs.Pane. This will indicate if any of the tabs are icon only or have been truncated. When this prop is true a header should be rendered in the content area to for accessibility purposes.

### Example Tab Content Component

```jsx

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isLabelHidden: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node,
};


const TabContent = ({ isLabelHidden, label, children }) => (
  <div style={{ height: '200px', padding: '10px' }}>
    {isLabelHidden ? <h3>{label}</h3> : null}
    {children}
  </div>
);

TabContent.propTypes = propTypes;
export default TabContent;

```

### Controlled vs. Uncontrolled Tabs

Terra-tabs allows you to use either a controlled or uncontrolled mode in order to have the amount control over the state that you need.

### Uncontrolled Tabs

Uncontrolled tabs is the default mode of terra-tabs. In this mode the tabs will handle all state internally and the initial active tab can optionally be set using `defaultActiveKey` on the `<Tabs />` component.

```jsx

import React from 'react';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Tabs from 'terra-tabs';
import TabContent from './TabContent';

const TabsComponent = (props) => {
  const labelTab = (
    <Tabs.Pane label="Tab with label" key="LabelTab">
      <TabContent label="Tab with label">
        Content for the tab with label.
      </TabContent>
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="IconTab">
      <TabContent label="Tab with icon">
        Content for tab with icon.
      </TabContent>
    </Tabs.Pane>
  );

  const customTab = (
    <Tabs.Pane
      customDisplay={(
        <div className="customTabDisplay">
          Custom display
        </div>
      )}
      label="Custom display"
      key="CustomTab"
    >
      <TabContent label="Custom display">
        Content for custom tab.
      </TabContent>
    </Tabs.Pane>
  );

  const iconOnlyTab = (
    <Tabs.Pane
      icon={<IconBriefcase />}
      label="Icon Only"
      key="IconOnlyTab"
    >
      <TabContent label="Icon Only">
        Content for icon only tab.
      </TabContent>
    </Tabs.Pane>
  );

  const disabledTab = (
    <Tabs.Pane label="Disabled Tab" icon={<IconSearch />} isDisabled key="DisabledTab" />
  );

  return (
    <Tabs variant={Tabs.Opts.Variants.MODULAR_CENTERED} defaultActiveKey="LabelTab" tabFill fill>
      {labelTab}
      {iconTab}
      {customTab}
      {disabledTab}
      {iconOnlyTab}
    </Tabs>
  );
};

export default TabsComponent;

```

### Controlled Tabs

In controlled mode terra-tabs does not handle any of the selection state internally, it is left up to the consumer. This mode is enabled by setting the `activeKey` prop on the `<Tabs />` component. A handler is needed for `onChange` to be notified of user selection and update the state. If both `activeKey` and `defaultActiveKey` are set, then `defaultActiveKey` will have no effect.

```jsx

import React from 'react';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Tabs from 'terra-tabs';

const propTypes = {
  activeKey: PropTypes.string,
  children: PropTypes.node,
}

class CustomTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeKey: Tabs.Utils.initialSelectedTabKey(this.props.children, this.props.activeKey) };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event, selectedKey) {
    if (Tabs.Utils.shouldHandleSelection(this.state.activeKey, selectedKey)) {
      this.setState({ activeKey: selectedKey });

      // Custom Selection Logic Here
    }
  }

  return (
    <Tabs
      activeKey={this.state.activeKey}
      onChange={this.handleOnChange}
    >
      {children}
    </Tabs>
  );
};

export default CustomTabs;

```

## Component Features

 * [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
 * [Internationalization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#internationalization-i18n-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#ltr--rtl-support)
