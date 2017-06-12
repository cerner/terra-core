# Terra Popup

The Terra Popup is higher order component, that launches tether positioned content, with the ability to display a dynamic arrow.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-popup`
  - `yarn add terra-popup`

## Usage

```jsx
import React from 'react';
import Popup from 'terra-popup';

class PopupExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: false };
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  handleButtonClick() {
    this.setState({ open: true });
  }

  handleRequestClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Popup
          classNameArrow="example-arrow-class"
          classNameContent="example-content-class"
          classNameOverlay="example-overlay-class"
          contentAttachment="top center"
          contentDimensions="50x 25x"
          isArrowDisplayed
          disableHeader
          isOpen={this.state.open}
          onRequestClose={this.handleRequestClose}
          targetRef={this.getButtonNode}
        >
          <p>this is example popup content</p>
        </Popup>
        <button onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Example Button Text
        </button>
      </div>
    );
  }
}

export default PopupExampleComponent;
```
