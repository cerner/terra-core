import React from 'react';
import Modal from '../../../../terra-modal/src/Modal';

class ModalDefault extends React.Component {
  constructor() {
    super();
    this.state = {isOpen: true};
  }

  render() {
    const button1 = <button>Open portal with pseudo modal</button>;

    return (
      <div>
        <Modal
          isOpen={this.state.isOpen}
          openByClickOn={button1}
          ariaLabel={'Terra Modal'}
        >
            <h1>Modal Content 1</h1>
            <h2>Modal Content 2</h2>
            <hr/>
            <button>Close this</button>
        </Modal>
      </div>
    );
  }
}

export default ModalDefault;

