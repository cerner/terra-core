import React from 'react';
import IconAlert from 'terra-icon/lib/icon/IconAlert';

const icon = <IconAlert width="40px" height="40px" />;
// Block style is required since images are inline by default. This could be resolved by someones normalize.css
const image = <img style={{ display: 'block' }} height="40px" width="40px" src="https://github.com/cerner/terra-core/raw/master/terra.png" alt="a happy panda" />;
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
  icon,
  image,
  textWithBlueBorder,
  textWithBorder,
};
