# Terra Modal

Modals are used to display content in a layer above the app. Modals consist of an overlay and container. Higher order components can provide the modal dialog with a header, body, and close button.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal`
  - `yarn add terra-modal`

## Usage

```jsx
import React from 'react';
import Modal from 'terra-modal';

class MyApp extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Modal
          ariaLabel="My Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
        >
          <div>
            <h1>My Modal</h1>
            <p>Additional content goes here</p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </Modal>
        <button onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default MyApp;
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)

