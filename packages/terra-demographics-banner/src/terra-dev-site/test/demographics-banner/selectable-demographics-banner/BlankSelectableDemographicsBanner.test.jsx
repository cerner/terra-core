import React, { useState } from 'react';
import SelectableDemographicsBanner from '../../../../SelectableDemographicsBanner';

export default () => {
  const [message, setMessage] = useState('');

  const handleDemographicsClick = () => {
    setMessage('Demographics banner clicked');
  };

  return (
    <div>
      <SelectableDemographicsBanner
        id="blank-demographics-banner"
        onClick={handleDemographicsClick}
      />
      <span>{message}</span>
    </div>
  );
};

