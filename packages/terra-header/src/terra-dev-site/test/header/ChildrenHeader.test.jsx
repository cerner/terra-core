import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Header from 'terra-header/lib/Header';
import Button from 'terra-button';

const HeaderExample = () => (
  <div>
    <br />
    <Header>
      <Button text="Custom Button" onClick={() => alert('You clicked me!')} />
    </Header>
    <br />
  </div>
);

export default HeaderExample;
