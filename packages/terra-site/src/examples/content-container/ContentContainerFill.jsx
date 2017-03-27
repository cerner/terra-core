import React from 'react';

import ContentContainer from 'terra-content-container';
import ClinicalItemView from 'terra-clinical-item-view';
import Button from 'terra-button';

const display1 = <ClinicalItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <ClinicalItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <ClinicalItemView.Display text="display 3" />;
const display4 = <ClinicalItemView.Display text="display 4" />;
const display5 = <ClinicalItemView.Display text="display 5" />;
const display6 = <ClinicalItemView.Display text="display 6" />;
const displays = [display1, display2, display3, display4, display5, display6];

const itemView1 = <ClinicalItemView displays={displays} />;
const itemView2 = <ClinicalItemView displays={displays} />;

const button1 = <Button text="header button">;

const container = () => (
  <ContentContainer header={button1} fill>
    <ClinicalItemView displays={displays} />
    <ClinicalItemView displays={displays} />
  </ContentContainer>);

export default container;
