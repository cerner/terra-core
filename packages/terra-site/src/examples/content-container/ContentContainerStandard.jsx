import React from 'react';

import ContentContainer from 'terra-content-container';
import Button from 'terra-button';

const display1 = <p>display1display1display1display1display1display1display1display1display1display1display1display1display1display1</p>;
const display2 = <p>display2display2display2display2display2display2display2display2display2display2display2display2display2display2</p>;
const display3 = <p>display 3</p>;
const display4 = <p>display 4</p>;
const display5 = <p>display 5</p>;
const display6 = <p>display 6</p>;
const displays = [display1, display2, display3, display4, display5, display6];

const button1 = <Button text="header button" />;

const container = () => (
  <ContentContainer header={button1}>
    {displays}
    {displays}
    {displays}
  </ContentContainer>);

export default container;
