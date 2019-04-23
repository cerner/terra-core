import React from 'react';

const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const simpleText = <div>{ipsum}</div>;
const textWithBlueBorder = <div style={{ border: '2px solid #0079BE' }}>{ipsum}</div>;

const alignExampleDiv = (
  <div
    style={{
      backgroundColor: '#000',
      display: 'block',
      height: '20px',
      margin: '1px',
      width: '40px',
    }}
  />
);

const alignExampleDivBlue = (
  <div
    style={{
      backgroundColor: '#0079BE',
      display: 'block',
      height: '20px',
      margin: '1px',
      width: '40px',
    }}
  />
);

export {
  alignExampleDiv,
  alignExampleDivBlue,
  simpleText,
  textWithBlueBorder,
};
