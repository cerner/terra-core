import React, { useState } from 'react';
import { SelectableDemographicsBanner } from 'terra-demographics-banner';

const SelectableDemographicsBannerWithMissingData = () => {
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
        selectableTileClick={handleDemographicsClick}
        infoButtonClick={handleInfoButtonClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default SelectableDemographicsBannerWithMissingData;
