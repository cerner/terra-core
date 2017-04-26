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
      isOpened: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }


  handleOpenModal() {
    this.setState({ isOpened: true });
  }

  handleCloseModal() {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <div>
        <Modal
          ariaLabel="My Modal"
          isOpened={this.state.isOpened}
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
