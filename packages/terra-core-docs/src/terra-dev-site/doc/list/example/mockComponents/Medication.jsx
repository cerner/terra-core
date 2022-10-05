import React from 'react';
import Avatar from 'terra-avatar';

const mockMedication = [
  ['Bacampicillin'],
  ['Cemafendole'],
  ['Dexamethasone Topical'],
  ['Cinnamon'],
  ['Trimethaone Camsylate'],
];

const Medication = (props) => (
  <div>
    <div>{mockMedication[props.number]}</div>
    <div>Info: {mockMedication[props.number]} may or may not be a medication</div>
    <div>More Info: Something more about {mockMedication[props.number]} here</div>
  </div>
);

export default Medication;
