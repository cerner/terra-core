import React from 'react';
import FocusTrap from 'focus-trap-react';

class ModalDialog extends React.Component {
  render() {
    return (
      <FocusTrap>
        <div onClick={this.props.closePortal} className="terra-Modal-overlay" />
        <div className="terra-Modal" role='dialog'>
          {this.props.children}
          <p><button onClick={this.props.closePortal}>Close this</button></p>
        </div>
      </FocusTrap>
    );
  }
}

export default ModalDialog;
