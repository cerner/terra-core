import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import AppDelegate from 'terra-app-delegate';
import Popup from '../../../lib/Popup';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);
    this.handlePopupButtonClick = this.handlePopupButtonClick.bind(this);
    this.handlePopupRequestClose = this.handlePopupRequestClose.bind(this);
    this.handlePopupOnChange = this.handlePopupOnChange.bind(this);
    this.state = { open: false };
  }

  disclose(size) {
    return () => {
      const identifier = Date.now();

      this.props.app.disclose({
        preferredType: 'modal',
        size,
        content: {
          key: `PopupInModalTest-${identifier}`,
          name: 'PopupInModalTest',
          props: {
            identifier: `PopupInModalTest-${identifier}`,
          },
        },
      });
    };
  }

  closeDisclosure() {
    this.props.app.closeDisclosure();
  }

  handlePopupButtonClick() {
    this.setState({ open: true });
  }

  handlePopupRequestClose() {
    this.setState({ open: false });
  }

  handlePopupOnChange() {
    this.setState({ open: false });
  }

  modalContent(props) {
    return (
      <div className="content-container" style={{ height: '100%', padding: '10px' }}>
        {props.app && props.app.releaseFocus ? <h4>Modal focus is released!</h4> : null }
        {props.app && props.app.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
        <br />
        <Popup
          isArrowDisplayed
          classNameContent="test-content"
          isOpen={this.state.open}
          onRequestClose={this.handlePopupRequestClose}
          targetRef={() => document.getElementById('popup-in-modal')}
          releaseFocus={props.app.releaseFocus}
          requestFocus={props.app.requestFocus}
        >
          <p>This is popup content</p>
        </Popup>
        <button id="popup-in-modal" onClick={this.handlePopupButtonClick}>Display popup</button>
        <br />
        <br />
        <button className="close-disclosure" onClick={this.closeDisclosure}>Close Disclosure</button>
      </div>
    );
  }

  render() {
    const { app } = this.props;
    const content = this.modalContent(this.props);
    const triggerButton = <button className="disclose"onClick={this.disclose()}>Disclose Modal</button>;

    return (
      app && app.closeDisclosure ? content : triggerButton
    );
  }
}

ModalContainer.propTypes = {
  app: AppDelegate.propType,
};

AppDelegate.registerComponentForDisclosure('PopupInModalTest', ModalContainer);

export default ModalContainer;
