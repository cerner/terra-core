import React from 'react';

const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const textWithBorder = <div style={{ border: '1px solid #000' }}>{ipsum}</div>;
const textWithBlueBorder = <div style={{ border: '1px solid #0079BE' }}>{ipsum}</div>;

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

const alignStartExampleDiv = (
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

const alignEndExampleDiv = (
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
  alignEndExampleDiv,
  alignExampleDiv,
  alignStartExampleDiv,
  textWithBlueBorder,
  textWithBorder,
};
