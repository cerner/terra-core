import React, { useState } from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container/lib/ContentContainer';
import Card from 'terra-card';

const AccessibilityBackActionHeader = () => {
  const text = ['Current Patient: Alex'];
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
              header={<ActionHeader text="Patient Details" level={2} onBack={handleCloseModal} />}
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
          <h3>Back ActionHeader</h3>
          <Button id="trigger-dialog-modal" text="Show Patient" onClick={handleOpenModal} />
        </Card.Body>
      </div>
    </Card>
  );
};
export default AccessibilityBackActionHeader;
