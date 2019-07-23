import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Header from 'terra-header/lib/Header';
import Button from 'terra-button';

const HeaderExample = () => (
  <div>
    <br />
    <Header
      title="Start and End Header"
      level={3}
      startContent={<Button text="Back" onClick={() => alert('You clicked Back!')} />}
      endContent={<Button text="Close" onClick={() => alert('You clicked Close!')} />}
    >
      <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
    </Header>
    <br />
  </div>
);

export default HeaderExample;
