import React from 'react';
import ReactDOM from 'react-dom';

class ModalPortalExample extends React.Component {
  render() {
    const modal = (
      <div>
        <button>Open Modal</button>
      </div>
    );

    return ReactDOM.createPortal(
      modal,
      document.createElement('div'),
    );
  }
}

export default ModalPortalExample;
