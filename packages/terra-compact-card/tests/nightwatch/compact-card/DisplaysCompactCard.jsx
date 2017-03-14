import React from 'react';

import CompactCard from '../../../lib/CompactCard';

const display1 = <CompactCard.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" key="123" />;
const display2 = <CompactCard.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" key="124" />;
const display3 = <CompactCard.Display text="display 3" key="125" />;
const display4 = <CompactCard.Display text="display 4" key="126" />;
const display5 = <CompactCard.Display text="display 5" key="127" />;
const display6 = <CompactCard.Display text="display 6" key="128" />;
const displays = [display1, display2, display3, display4, display5, display6];

const cards = () => (
  <div>
    <CompactCard displays={displays} id="test-displays" />
    <CompactCard displays={displays} layout="twoColumns" id="test-displays-two" />
    <CompactCard displays={displays} layout="twoColumns" textEmphasis="left" id="test-displays-two-left" />
  </div>
);

export default cards;
