import React from 'react';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';
import Field from 'terra-form-field';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DatePicker from 'terra-date-picker/lib/DatePicker';

const ModalContent = (props) => {
  const { app } = props;

  return (
    <div className="content-container" style={{ height: '100%', padding: '10px' }}>
      {app && app.releaseFocus ? <h4>Modal focus is released!</h4> : null }
      {app && app.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
      <Field label="Enter Date" htmlFor="date-picker-in-modal">
        <DatePicker name="date-picker-in-modal" id="date-picker-in-modal" releaseFocus={app.releaseFocus} requestFocus={app.requestFocus} />
      </Field>
      <br />
      <br />
      <Button className="close-disclosure" text="Close Disclosure" onClick={app.closeDisclosure} />
    </div>
  );
};

ModalContent.propTypes = {
  app: AppDelegate.propType,
};

export default ModalContent;
