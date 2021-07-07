import React from 'react';
import PillList, { Pill } from 'terra-pills';

const BasicPill = () => (
  <PillList
    ariaLabel="Example of a Basic Pill"
  >
    <Pill
      label="asthma"
    />
  </PillList>
);

export default BasicPill;
