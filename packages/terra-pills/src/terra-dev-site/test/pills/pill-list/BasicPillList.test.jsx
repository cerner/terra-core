import React from 'react';
import PillList from '../../../../PillList';
import Pill from '../../../../Pill';

const BasicPillList = () => (
  <PillList
    ariaLabel="Pill Container"
  >
    <Pill
      label="Demo 1"
    />
    <Pill
      label="Demo 2"
    />
    <Pill
      label="Demo 3"
    />
    <Pill
      label="Demo 4"
    />
    <Pill
      label="Demo 5"
    />
  </PillList>
);

export default BasicPillList;
