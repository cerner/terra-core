# Terra Popup

The Terra Popup is higher order component that launches [terra-hookshot][4] positioned content with the ability to display a dynamic arrow.

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

### Implementation Notes:

##### Default Open Popups
When attempting to present a popup that is open by default you will need to allow for the target element and/or bounding element to be mounted in order to retrieve the ref for positioning and/or bounding. While this isn't the optimal pattern, as it will force a double render, you can force an update in componentDidMount.
```jsx
class ExampleElementWithPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
    this.state = { open: true };
  }

  componentDidMount() {
    this.forceUpdate();
  }
```

##### Stateless Target Elements
As stateless react elements do not return a ref, but may be desired targets for a popup to attach to, additional code is required to retreive the elements ref. If a ref callback has not been plumbed through in the elements implementation there are a few options:

##### Use a selector to retrieve your ref. The weakness of this option is that you need to ensure your selector is unique, so it's not advisiable in components that are reused on the same page.

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
##### Wrap the element in span or div. The weakness of this option is that you need to ensure the wrapping div fits the content, while still styled correctly on the page.
 
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
        <span ref={this.setButtonNode}>
          <Button />
        </span>
        <Popup
          targetRef={this.getButtonNode}
```

##### Rendering a popup inside a modal
The [Modal][1] component by default will trap focus. In order to interact with a popup when rendered inside a modal, the popup must request focus from the modal. The [App Delegate][2] in the [Modal Manager][3] component provides support for requesting and releasing focus from the modal. Therefore, the [Modal Manager][3] component must be used when rendering a popup in a modal. When composing a popup in the [Modal Manager][3], pass in the requestFocus and releaseFocus functions in the [App Delegate][2] to the requestFocus and releaseFocus props in the popup. The [Modal Manager][3] will facilitate requesting and releasing focus when the popup opens and closes.

##### Rendering a popup using automatic sizing
When setting either the contentHeight or contentWidth to 'auto' the popup will layout to the size of the content. If the content is larger than the set bounding area it will be resized to fit the bounding area, and the content will be decorated with the props isHeightBounded/isWidthBounded in order to allow the content to respond to the resized state. Automatic sized popups will reposition if the inner content resizes, though animated size changes are heavily discouraged and not fully supported; as performance is severly impacted even in the best conditions with capable hardware.

[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-modal/docs
[2]: https://github.com/cerner/terra-core/tree/master/packages/terra-app-delegate/docs
[3]: https://github.com/cerner/terra-core/tree/master/packages/terra-modal-manager/docs
[4]: https://github.com/cerner/terra-core/tree/master/packages/terra-hookshot/docs

