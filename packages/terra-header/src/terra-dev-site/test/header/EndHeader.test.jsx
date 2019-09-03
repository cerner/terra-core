import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Header from 'terra-header/lib/Header';
import Button from 'terra-button';

const HeaderExample = () => (
  <div>
    <br />
    <Header
      endContent={<Button text="Button" onClick={() => alert('You clicked endContent button!')} />}
    />
    <br />
  </div>
);

export default HeaderExample;
