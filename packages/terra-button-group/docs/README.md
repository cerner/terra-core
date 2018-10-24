# Terra Button Group

 The Terra Button Group component is a controlled component that groups buttons and allows consumers to manage the selection state of each button in the group. By default, the buttons in the Button Group do not remain selected when clicked. Therefore, consumers must manage the selection state of the buttons because the Button Group does not keep track of the selection state. A controlled Button Group gives the consumer the flexibility to compose a single-select button group as well as a multi-select button group. This component is intended to group buttons with similar context or to toggle content, it is not intended to be used as a form element.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-button-group`
  - `yarn add terra-button-group`

## Usage

### Not Selectable Button Group

```jsx
import React from 'react';
import ButtonGroup from 'terra-button-group';

// Default button group
  <ButtonGroup>
    <ButtonGroup.Button text="Button 1" key="button1" />
    <ButtonGroup.Button text="Button 2" key="button2" />
  </ButtonGroup>
```

### Single-Select Button Group
```jsx
import React from 'react';
import ButtonGroup from 'terra-button-group';

class SingleSelectButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKey: '1' };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedKey) {
    this.setState({ selectedKey: [selectedKey] });
  }

  render() {
    return (
      <ButtonGroup onChange={this.handleSelection} selectedKeys={this.state.selectedKey}>
        <ButtonGroup.Button text="Single-Select 1" key="1" />
        <ButtonGroup.Button text="Single-Select 2" key="2" />
        <ButtonGroup.Button text="Single-Select 3" key="3" />
        <ButtonGroup.Button text="Single-Select 4" key="4" />
      </ButtonGroup>
    );
  }
}
export default SingleSelectButtonGroup;
```

### Multi-Select Button Group
```jsx
import React from 'react';
import ButtonGroup from 'terra-button-group';

class MultiSelectButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedKeys: [] };
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(event, selectedKey) {
    const clonedSelectedKeys = this.state.selectedKeys.slice();
    const index = clonedSelectedKeys.indexOf(selectedKey);

    if (index > -1) {
      clonedSelectedKeys.splice(index, 1);
    } else {
      clonedSelectedKeys.push(newSelectedKey);
    }

    this.setState({ selectedKeys: clonedSelectedKeys });
  }

  render() {
    return (
      <ButtonGroup onChange={this.handleSelection} selectedKeys={this.state.selectedKeys}>
        <ButtonGroup.Button text="Mult-Select 1" key="1" />
        <ButtonGroup.Button text="Mult-Select 2" key="2" />
        <ButtonGroup.Button text="Mult-Select 3" key="3" />
        <ButtonGroup.Button text="Mult-Select 4" key="4" />
      </ButtonGroup>
    );
  }
}

export default MultiSelectButtonGroup;
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
