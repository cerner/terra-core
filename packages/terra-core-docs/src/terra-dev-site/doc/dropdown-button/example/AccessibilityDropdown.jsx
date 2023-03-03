import React, { useState } from 'react';
import DropdownButton, { Item } from 'terra-dropdown-button';
import Card from 'terra-card';

const AccessibilityDropdown = () => {
  const [message, setMessage] = useState('No option clicked');

  return (
    <Card>
      <Card.Body>
        <React.Fragment>
          <DropdownButton
            label="For Patients"
          >
            <Item label="Ask free health question" onSelect={() => setMessage('Ask free health question clicked')} />
            <Item label="Search for Doctors" onSelect={() => setMessage('Search for Doctors clicked')} />
            <Item label="Search for clinics" onSelect={() => setMessage('Search for clinics clicked')} />
            <Item label="Search for Hospitals" onSelect={() => setMessage('Search for Hospitals clicked')} />
            <Item label="Consult a Doctor" onSelect={() => setMessage('Consult a Doctor clicked')} />
          </DropdownButton>
          <p>{message}</p>
        </React.Fragment>
      </Card.Body>
    </Card>
  );
};

export default AccessibilityDropdown;
