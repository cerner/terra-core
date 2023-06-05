import React, { useState } from 'react';
import StatusView from 'terra-status-view';
import SingleSelectField from 'terra-form-select/lib/SingleSelectField';

const ToggleVariants = () => {
  const [variant, setVariant] = useState('error');

  const handleOnSelect = (value) => {
    setVariant(value);
  };

  return (
    <div>
      <StatusView variant={variant} />
      <SingleSelectField label="Change Variant" onChange={handleOnSelect} value={variant} maxWidth="300px" selectId="change-variant-field" placeholder="Select a Variant">
        <SingleSelectField.Option value="error" display="Error" />
        <SingleSelectField.Option value="no-data" display="No Results" />
        <SingleSelectField.Option value="no-matching-results" display="No Matching Result" />
        <SingleSelectField.Option value="not-authorized" display="Not Authorized" />
      </SingleSelectField>
      <p>
        **  Select a status view variant from the dropdown above.
      </p>
    </div>
  );
};

export default ToggleVariants;
