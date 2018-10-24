# Terra Abstract Modal

The abstract modal is a structural component that provides the ability to display portal'd content in a layer above the app. It consists of an overlay and an unstyled fixed position div in which content can be placed. The abstract modal is not intended to be consumed directly, but rather wrapped in a higher order component. Higher order components can provide the abstract modal with sizing, visual styles, and content (e.g; header, body, and actionable buttons). The abstract modals maximum size is constrained by the viewport size, so the content placed inside the modal needs to be responsive.

The AbstractModal component by default will trap focus. For any popup component (e.g; [date picker][1], [popup][2], [menu][3], [select][4]) that can display inside the AbstractModal, the focus trap needs to be released from the abstract modal in order to interact with the popup component.

Our current recommendation for HOC is the [terra-modal-manager][5], as it provides sizing, responsive behavior, visual styles, focus management, and a disclosure stack.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-abstract-modal`
  - `yarn add terra-abstract-modal`

## Usage

```jsx
import React from 'react';
import AbstractModal from 'terra-abstract-modal';

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
        <AbstractModal
          ariaLabel="My Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
        >
          <div>
            <h1>My Modal</h1>
            <p>Additional content goes here</p>
            <button type="button" onClick={this.handleCloseModal}>Close Modal</button>
          </div>
        </AbstractModal>
        <button type="button" onClick={this.handleOpenModal}>Open Modal</button>
      </div>
    );
  }
}

export default MyApp;
```
[1]: https://github.com/cerner/terra-core/tree/master/packages/terra-date-picker/docs
[2]: https://github.com/cerner/terra-framework/tree/master/packages/terra-popup/docs
[3]: https://github.com/cerner/terra-core/tree/master/packages/terra-menu/docs
[4]: https://github.com/cerner/terra-core/tree/master/packages/terra-form-select/docs
[5]: https://github.com/cerner/terra-framework/tree/master/packages/terra-modal-manager/docs

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-ui/blob/master/src/terra-dev-site/contributing/ComponentStandards.e.contributing.md#mobile-support)
