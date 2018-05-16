import React from 'react';
import Button from 'terra-button';
import DatePicker from '../../../DatePicker';

const ModalContent = () => {
  const { app } = this.props;

  return (
    <div className="content-container" style={{ height: '100%', padding: '10px' }}>
      {app && app.releaseFocus ? <h4>Modal focus is released!</h4> : null }
      {app && app.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
      <DatePicker name="date-picker-in-modal" releaseFocus={app.releaseFocus} requestFocus={app.requestFocus} />
      <br />
      <br />
      <Button className="close-disclosure" text="Close Disclosure" onClick={app.closeDisclosure} />
    </div>
  );
};

export default ModalContent;
