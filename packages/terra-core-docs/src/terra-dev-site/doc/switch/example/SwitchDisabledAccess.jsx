import React from 'react';
import Card from 'terra-card';
import Switch from 'terra-switch';

const SwitchDisabledAccess = () => (
  <div>
    <Card>
      <Card.Body>
        <Switch
          labelText="Show Patient History"
          isDisabled
        />
      </Card.Body>
    </Card>
  </div>

);

export default SwitchDisabledAccess;
