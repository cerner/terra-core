import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const BasicPillListVariedPillLabel = () => (
  <PillList
    ariaLabel="Pill Container"
  >
    <Pill
      label="Demo"
    />
    <Pill
      label="Long Label"
    />
    <Pill
      label="Very Long Label"
    />
    <Pill
      label="Very Long Label which should show ellipses"
    />
    <Pill
      label="Random"
    />
    <Pill
      label="Random 2"
    />
  </PillList>
);

export default BasicPillListVariedPillLabel;
