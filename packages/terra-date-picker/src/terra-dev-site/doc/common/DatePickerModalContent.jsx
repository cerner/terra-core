import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import Field from 'terra-form-field';

// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DatePicker from 'terra-date-picker/lib/DatePicker';

const ModalContent = (props) => {
  const { disclosureManager } = props;

  return (
    <div className="content-container" style={{ height: '100%', padding: '10px' }}>
      {disclosureManager && disclosureManager.releaseFocus ? <h4>Modal focus is released!</h4> : null }
      {disclosureManager && disclosureManager.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
      <Field label="Enter Date" htmlFor="date-picker-in-modal">
        <DatePicker name="date-picker-in-modal" id="date-picker-in-modal" releaseFocus={disclosureManager.releaseFocus} requestFocus={disclosureManager.requestFocus} />
      </Field>
      <br />
      <br />
      <Button className="close-disclosure" text="Close Disclosure" onClick={disclosureManager.closeDisclosure} />
    </div>
  );
};

ModalContent.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContent);
