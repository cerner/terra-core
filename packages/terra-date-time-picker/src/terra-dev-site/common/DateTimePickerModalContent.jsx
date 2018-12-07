import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DateTimePicker from 'terra-date-time-picker/lib/DateTimePicker';

const ModalContent = (props) => {
  const { disclosureManager } = props;

  return (
    <div className="content-container" style={{ height: '100%', padding: '10px' }}>
      {disclosureManager && disclosureManager.releaseFocus ? <h4>Modal focus is released!</h4> : null }
      {disclosureManager && disclosureManager.requestFocus ? <h4>Modal focus is trapped!</h4> : null }
      <DateTimePicker value="06-26-2017" name="date-time-picker-in-modal" releaseFocus={disclosureManager.releaseFocus} requestFocus={disclosureManager.requestFocus} />
      <br />
      <br />
      <Button className="close-disclosure" onClick={disclosureManager.closeDisclosure} text="Close Disclosure" />
    </div>
  );
};

ModalContent.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContent);
