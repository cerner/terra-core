import React, { useState } from 'react';
import Button from 'terra-button';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';
import Card from 'terra-card';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';

const ActionHeaderWithInformativeIcon = () => {
  const text = ['Current Patient: Alex',
    ' Patient age: 25', ' Patient Id: 11404'];
  const [isOpen, setOpen] = useState(false);
  const Icon = <IconPrinter a11yLabel="Print" />;

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
                <ActionHeader text="Patients Details" level={2} onBack={handleCloseModal}>
                  <Button icon={Icon} text="Patient Details" />
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
          <h3>Patient Allergies</h3>
          <Button id="trigger-dialog-modal" text="Show Patients Details" onClick={handleOpenModal} />
        </Card.Body>
      </div>
    </Card>
  );
};
export default ActionHeaderWithInformativeIcon;
