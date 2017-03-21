import React from 'react';

import ClinicalItemView from '../../../lib/ClinicalItemView';

const display1 = <ClinicalItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" key="123" />;
const display2 = <ClinicalItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" key="124" />;
const display3 = <ClinicalItemView.Display text="display 3" key="125" />;
const display4 = <ClinicalItemView.Display text="display 4" key="126" />;
const display5 = <ClinicalItemView.Display text="display 5" key="127" />;
const display6 = <ClinicalItemView.Display text="display 6" key="128" />;
const displays = [display1, display2, display3, display4, display5, display6];

const views = () => (
  <div>
    <ClinicalItemView displays={displays} id="test-displays" />
    <ClinicalItemView displays={displays} layout="twoColumns" id="test-displays-two" />
    <ClinicalItemView displays={displays} layout="twoColumns" textEmphasis="start" id="test-displays-two-left" />
  </div>
);

export default views;
