import React from 'react';
import FocusTrap from 'focus-trap-react';

class ModalDialog extends React.Component {
  render() {
    return (
      <FocusTrap>
        <div
         onClick={this.props.closePortal}
         className={this.props.classNameOverlay}/>
        <div
          className={'terra-Modal'}
          role={this.props.role}
        >
          {this.props.children}
          <p><button onClick={this.props.closePortal}>Close openByClickOn modal</button></p>
        </div>
      </FocusTrap>
    );
  }
}

export default ModalDialog;
