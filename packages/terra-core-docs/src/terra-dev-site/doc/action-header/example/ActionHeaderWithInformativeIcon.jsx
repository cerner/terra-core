/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import Button, { IconButton, IconTypes } from 'terra-button';
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
                  <IconButton icon={Icon} iconType={IconTypes.INFORMATIVE} text="Patient Details" />
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
