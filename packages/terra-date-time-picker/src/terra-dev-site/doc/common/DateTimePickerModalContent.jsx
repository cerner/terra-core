import React from 'react';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';
import DateTimePicker from '../../../DateTimePicker';

const ModalContent = (props) => {
  const { app } = props;

  return (
    <div className="content-container" style={{ height: '100%', padding: '10px' }}>
      {app && app.releaseFocus ? <h4>Modal focus is released!</h4> : null }
      {app && app.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
      <DateTimePicker name="date-time-picker-in-modal" releaseFocus={app.releaseFocus} requestFocus={app.requestFocus} />
      <br />
      <br />
      <Button className="close-disclosure" onClick={this.closeDisclosure}>Close Disclosure</Button>
    </div>
  );
};

ModalContent.propTypes = {
  app: AppDelegate.propType,
};

export default ModalContent;
