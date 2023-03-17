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
            label="Patient Allergies"
          >
            <Item label="Cats" onSelect={() => setMessage('Clicked Cat allergies')} />
            <Item label="Dogs" onSelect={() => setMessage('Clicked Dogs allergies')} />
            <Item label="Dust" onSelect={() => setMessage('Clicked Dust allergies')} />
            <Item label="Mold" onSelect={() => setMessage('Clicked Mold allergies')} />
            <Item label="Latex" onSelect={() => setMessage('Clicked Latex allergies')} />
          </DropdownButton>
          <p>{message}</p>
        </React.Fragment>
      </Card.Body>
    </Card>
  );
};

export default AccessibilityDropdown;
