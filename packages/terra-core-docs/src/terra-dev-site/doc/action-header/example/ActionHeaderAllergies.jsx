import React, { useState } from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container/lib/ContentContainer';
import Card from 'terra-card';

const ActionHeaderAllergies = () => {
  const text = ['Current Allergies: Cats, Dogs, Dust, Moulds'];
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
              header={<ActionHeader text="Allergies" level={2} onBack={handleCloseModal} onClose={handleCloseModal} />}
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
          <h3>Allergies</h3>
          <p>Patient name: Alex</p>
          <Button id="trigger-dialog-modal" text="Show Allergies" onClick={handleOpenModal} />
        </Card.Body>
      </div>
    </Card>
  );
};
export default ActionHeaderAllergies;
