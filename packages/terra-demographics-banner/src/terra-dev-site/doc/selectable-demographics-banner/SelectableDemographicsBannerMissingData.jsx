import React, { useState } from 'react';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';

const SelectableDemographicsBannerWithMissingData = () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics banner clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};

export default SelectableDemographicsBannerWithMissingData;
