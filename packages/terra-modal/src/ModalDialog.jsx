import React from 'react';
import FocusTrap from 'focus-trap-react';

class ModalDialog extends React.Component {
  render() {
    return (
      <FocusTrap>
        <div
         closeOnOutsideClick onClick={(this.props.closeOnOutsideClick) ? this.props.closePortal: null}
         className={this.props.classNameOverlay}
         tabIndex="-1"
        >
        </div>
        <div
          aria-label={this.props.ariaLabel}
          className={this.props.classNameModal}
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
