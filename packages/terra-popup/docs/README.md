# Terra Popup

The Terra Popup is higher order component that launches tether positioned content with the ability to display a dynamic arrow.
- Additional tether documentation can be found on their site [TetherJS](http://tether.io/)

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

### Implementation Note:

As stateless react elements do not return a ref, but may be desired targets for a popup to atttch to, ,additional code is required to retreive the elements ref. If a ref callback has not been plumbed through in the elements implementation there are a few options:

#### Use a selector to retrieve your ref. The weakness of this option is that you need to ensure your selector is unique, so it's not advisiable in components that are reused on the same page.

```jsx
  static getButtonNode() {
    return document.getElementById('my-popup-button');
  }

  render() {
    <div>
      return (
        <Button id="my-popup-button" />
        <Popup
          targetRef={this.getButtonNode}
```
#### Wrap the element in span or div. The weakness of this option is that you need to ensure the wrapping div fits the content, while still styled correct on the page.
 
```jsx
  getButtonNode() {
    return this.buttonNode;
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  render() {
    <div>
      return (
        <span ref={this.setTargetNode}>
          <Button />
        </span>
        <Popup
          targetRef={this.getButtonNode}
```
