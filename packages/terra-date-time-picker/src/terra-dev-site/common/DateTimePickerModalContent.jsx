import React from 'react';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';

const ModalContent = (props) => {
  const { app } = props;

  return (
    <div className="content-container" style={{ height: '100%', padding: '10px' }}>
      {app && app.releaseFocus ? <h4>Modal focus is released!</h4> : null }
      {app && app.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
      <Field label="Enter Date/Time" htmlFor="modal-picker">
        <DateTimePicker
          value="06-26-2017"
          name="date-time-picker-in-modal"
          dateInputAttributes={{ id: 'modal-picker' }}
          releaseFocus={app.releaseFocus}
          requestFocus={app.requestFocus}
        />
      </Field>
      <br />
      <br />
      <Button className="close-disclosure" onClick={app.closeDisclosure} text="Close Disclosure" />
    </div>
  );
};

ModalContent.propTypes = {
  app: AppDelegate.propType,
};

export default ModalContent;
