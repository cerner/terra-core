import React, { useState } from 'react';
import SelectableDemographicsBanner from '../../../../selectable-demographics-banner/SelectableDemographicsBanner';

export default () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics banner clicked');
  };

  const handleInfoButtonClick = () => {
    setMessage('Info Button clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        id="blankDemographics"
        selectableTileClick={handleDemographicsClick}
        infoButtonClick={handleInfoButtonClick}
      />
      <span>{message}</span>
    </div>
  );
};

