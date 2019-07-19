import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import StatusView from 'terra-status-view/lib/StatusView';

const ToggleVariants = () => {
  const [variant, setVariant] = useState('error');

  const handleOnSelect = (event) => {
    setVariant(event.target.value);
  };

  return (
    <div>
      <StatusView variant={variant} />
      <fieldset>
        <legend>Change Variant</legend>
        <select id="statusViewVariant" name="statusViewVariant" value={variant} onChange={handleOnSelect}>
          <option value="error">Error</option>
          <option value="no-data">No Data</option>
          <option value="no-matching-results">No Matching Results</option>
          <option value="not-authorized">Not Authorized</option>
        </select>
      </fieldset>
    </div>
  );
};

export default ToggleVariants;
