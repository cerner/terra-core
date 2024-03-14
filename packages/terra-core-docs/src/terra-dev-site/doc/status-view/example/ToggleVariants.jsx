import React, { useState } from 'react';
import StatusView from 'terra-status-view';
import SingleSelectField from 'terra-form-select/lib/SingleSelectField';
import Button from 'terra-button';

const ToggleVariants = () => {
  const [variant, setVariant] = useState('error');
  const [selectValue, setSelectValue] = useState('error');
  const [statusValue, setStatusValue] = useState('error');
  const [onStatusClick, setStatusOnClick] = useState(false);


  const handleOnSelect = (value) => {
    setSelectValue(value);
    setStatusOnClick(false)
  };

  const handleOnClick = () => {
    setVariant(selectValue)
    setStatusValue(selectValue)
    setStatusOnClick(true);
  };

  return (
    <div>
      <StatusView id={statusValue} onStatusClick={onStatusClick} variant={variant} />
      <SingleSelectField label="Change Variant" onChange={handleOnSelect} value={selectValue} maxWidth="300px" selectId="change-variant-field" placeholder="Select a Variant">
        <SingleSelectField.Option value="error" display="Error" />
        <SingleSelectField.Option value="no-data" display="No Result" />
        <SingleSelectField.Option value="no-matching-results" display="No Matching Result" />
        <SingleSelectField.Option value="not-authorized" display="Not Authorized" />
      </SingleSelectField>
      <Button text="Apply" variant="emphasis" onClick={handleOnClick} />
      <p>
        Select a status view variant from the dropdown above.
      </p>
    </div>
  );
};

export default ToggleVariants;
