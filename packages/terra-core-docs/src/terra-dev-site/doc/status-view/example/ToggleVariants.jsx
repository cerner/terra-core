import React, { useState } from 'react';
import StatusView from 'terra-status-view';
import SingleSelectField from 'terra-form-select/lib/SingleSelectField';
import Button from 'terra-button';

const ToggleVariants = () => {
  const [variant, setVariant] = useState('error');
  const [selectValue, setSelectValue] = useState('error');

  const handleOnSelect = (value) => setSelectValue(value);

  const handleOnClick = () => setVariant(selectValue);

  return (
    <div>
      <StatusView variant={variant} />
      <SingleSelectField label="Change Variant" onChange={handleOnSelect} value={selectValue} maxWidth="300px" selectId="change-variant-field" placeholder="Select a Variant">
        <SingleSelectField.Option value="error" display="Error" />
        <SingleSelectField.Option value="no-data" display="No Results" />
        <SingleSelectField.Option value="no-matching-results" display="No Matching Result" />
        <SingleSelectField.Option value="not-authorized" display="Not Authorized" />
      </SingleSelectField>
      <Button text="Apply" variant="emphasis" onClick={handleValue} />
      <p>
        Select a status view variant from the dropdown above.
      </p>
    </div>
  );
};

export default ToggleVariants;
