import React from 'react';
import Avatar from 'terra-avatar';

const mockProviders = [
  ['Jon Snow', 'JS', '11111111JS', 'Doctor'],
  ['Big Bird', 'BB', '0012314BB', 'Nurse'],
  ['Arya Stark', 'AS', '863619AS', 'Surgeon'],
  ['Dorian Grey', 'DG', '632621DG', 'Nurse'],
  ['Cookie Monster', 'CM', '4521456CM', 'Doctor'],
];

const Provider = (props) => (
  <div>
    <Avatar alt={mockProviders[props.number][0]} initials={mockProviders[props.number][1]} />
    <span>{mockProviders[props.number][0]}</span>
    <span>User ID: {mockProviders[props.number][2]}</span>
    <span>Title: {mockProviders[props.number][3]}</span>
  </div>
);

export default Provider;
