# Terra Modal

A modal is a dialog prompt containing additional information to be revealed to the user.
It consists of a backdrop, a modal dialog with a header/body/footer.
It offers a few helpful features:
- Support scrolling of content within the modal window.
- Disable background scrolling when a modal window is displayed on a page.
- Allow closing the modal on backdrop click, ESC key, close button inside dialog.
- Keyboard navigation stays inside of the modal
- Support full-screen dialog and sizes with max-width at different breakpoints.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-modal`
  - `yarn install terra-modal`
- [Download the latest version](https://github.com/cerner/terra-modal/archive/master.zip)
- Clone the repo: `git clone https://github.com/cerner/terra-modal.git`
- Run the project with: `npm start`

## Usage

```jsx
import Modal from 'terra-modal';

class MyModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const header = <h1>I am a header</h1>;
    const body = <h1>I am a body</h1>;
    const footer = <h1>I am a footer</h1>;

    return (
      <div>
        <Button onClick={this.toggleModal}/>
        <Modal
          ariaLabel="mymodal"
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleModal}
          header={header}
          body={body}
          footer={footer}
        />
      </div>
    );
  }
}
```
