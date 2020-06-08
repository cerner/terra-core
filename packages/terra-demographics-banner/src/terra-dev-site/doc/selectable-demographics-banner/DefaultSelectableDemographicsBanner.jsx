import React, { useState } from 'react';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';

const DefaultSelectableDemographicsBanner = () => {
  return (
    <SelectableDemographicsBanner
      age="25 Years"
      dateOfBirth="May 9, 1993"
      gender="Male"
      personName="Johnathon Doe"
      preferredFirstName="John"
      onClick={() => alert('Demographics banner clicked!')}
    />
  );
};

export default DefaultSelectableDemographicsBanner;
