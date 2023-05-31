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
        ** Here the Select field shows the list of available status view variants. One can select any of the available options to check. For example a simple search screen can use the No-results variant to show that the entered string is not available while fetching a result from the database.
      </p>
    </div>
  );
};

export default ToggleVariants;
