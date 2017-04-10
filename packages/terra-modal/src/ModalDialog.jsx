import React from 'react';
import FocusTrap from 'focus-trap-react';

class ModalDialog extends React.Component {
  render() {
    return (
      <FocusTrap>
        <div
         onClick={this.props.closePortal}
         className={'terra-Modal-overlay'}/>
        <div
          aria-label={this.props.ariaLabel}
          className={'terra-Modal'}
          role={this.props.role}
        >
          {this.props.children}
          {/* The modal can also be setup to close when using openByClickon */}
          {/* This would be used if we wanted to add an x on the top right for every modal */}
          {/*<p><button onClick={this.props.closePortal}>Close openByClickOn modal</button></p> */}
        </div>
      </FocusTrap>
    );
  }
}

export default ModalDialog;
