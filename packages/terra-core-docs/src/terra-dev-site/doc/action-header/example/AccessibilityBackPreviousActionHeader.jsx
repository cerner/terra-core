/* eslint-disable no-alert */
import React, { useState } from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container/lib/ContentContainer';
import Card from 'terra-card';

const AccessibilityBackPreviousActionHeader = () => {
  const text = ['Current patient: Alex'];
  const [isOpen, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  if (isOpen) {
    return (
      <div>
        <Card>
          <Card.Body>
            <ContentContainer
              header={(
                <ActionHeader
                  text="Patient Details"
                  level={2}
                  onBack={handleCloseModal}
                  onClose={handleCloseModal}
                  onPrevious={() => alert('Previous Patient Details')}
                  onNext={() => alert('Next Patient Details')}
                />
)}
            >
              <p>{text}</p>
            </ContentContainer>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <Card>
      <div>
        <Card.Body>
          <h3>Back Previous Next ActionHeader</h3>
          <Button id="trigger-dialog-modal" text="Show patients" onClick={handleOpenModal} />
        </Card.Body>
      </div>
    </Card>
  );
};
export default AccessibilityBackPreviousActionHeader;
