import React from 'react';

import ContentContainer from 'terra-content-container';
import Button from 'terra-button';

const display1 = <p key="1">display1display1display1display1display1display1display1display1display1display1display1display1display1display1</p>;
const display2 = <p key="2">display2display2display2display2display2display2display2display2display2display2display2display2display2display2</p>;
const display3 = <p key="3">display 3</p>;
const display4 = <p key="4">display 4</p>;
const display5 = <p key="5">display 5</p>;
const display6 = <p key="6">display 6</p>;

const displays1 = [display1, display2, display3, display4, display5, display6];
const displays2 = displays1;
const displays3 = displays1;

const button1 = <Button text="header button" />;

const container = () => (
  <div style={{ height: '200px', overflow: 'auto' }}>
    <ContentContainer header={button1} fill>
      <div key="1">
        {displays1}
      </div>
      <div key="2">
        {displays2}
      </div>
      <div key="3">
        {displays3}
      </div>
    </ContentContainer>
  </div>);

export default container;
