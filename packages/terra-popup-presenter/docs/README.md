# Terra Popup Presenter

The Terra Popup Presenter is a wrapping high order component, that launches a tether displayed content.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-popup-presenter`
  - `yarn add terra-popup-presenter`

## Usage

```jsx
import React from 'react';
import PopupPresenter from 'terra-popup-presenter';

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
        <PopupPresenter
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
          <p>this is popup content</p>
        </PopupPresenter>
        <button onClick={this.handleButtonClick} ref={this.setButtonNode}>
          Example Content
        </button>
      </div>
    );
  }
}

export default PopupExampleComponent;
```
