import React, { useState } from 'react';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';

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
        selectableTileOnClick={handleDemographicsClick}
        infoButtonOnClick={handleInfoButtonClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default SelectableDemographicsBannerWithMissingData;
