import React from 'react';
import DatePicker from 'terra-date-picker';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
    this.closeDisclosure = this.closeDisclosure.bind(this);
  }

  disclose(size) {
    return () => {
      const identifier = Date.now();

      this.props.app.disclose({
        preferredType: 'modal',
        size,
        content: {
          key: `PickerInModalExample-${identifier}`,
          name: 'PickerInModalExample',
          props: {
            identifier: `PickerInModalExample-${identifier}`,
          },
        },
      });
    };
  }

  closeDisclosure() {
    this.props.app.closeDisclosure();
  }

  modalContent(props) {
    return (
      <div className="content-container" style={{ height: '100%', padding: '10px' }}>
        {props.app && props.app.releaseFocus ? <h4>Modal focus is released!</h4> : null }
        {props.app && props.app.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
        <br />
        <DatePicker name="date-picker-in-modal" releaseFocus={props.app.releaseFocus} requestFocus={props.app.requestFocus} />
        <br />
        <br />
        <Button className="close-disclosure" onClick={this.closeDisclosure}>Close Disclosure</Button>
      </div>
    );
  }

  render() {
    const { app } = this.props;
    const content = this.modalContent(this.props);
    const triggerButton = <Button className="disclose"onClick={this.disclose()}>Disclose Modal</Button>;

    return (
      app && app.closeDisclosure ? content : triggerButton
    );
  }
}

ModalContainer.propTypes = {
  app: AppDelegate.propType,
};

AppDelegate.registerComponentForDisclosure('PickerInModalExample', ModalContainer);

export default ModalContainer;
