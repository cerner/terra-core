import React, { useState } from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';
import Card from 'terra-card';
import DecoIconPrinter from 'terra-icon/lib/icon/IconPrinter';

const ActionHeaderWithDecorativeIcon = () => {
  const text = ['Current Patient: Alex',
    ' Patient age: 25', ' Patient Id: 11403'];
  const [isOpen, setOpen] = useState(false);
  const DecorativeIcon = <DecoIconPrinter />;

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
                <ActionHeader text="Patient Details" level={2} onBack={handleCloseModal}>
                  <Button icon={DecorativeIcon} text="Print Patient Details" />
                </ActionHeader>
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
          <h3>Patient Details</h3>
          <Button id="trigger-dialog-modal" text="Show Patient Details" onClick={handleOpenModal} />
        </Card.Body>
      </div>
    </Card>
  );
};
export default ActionHeaderWithDecorativeIcon;
