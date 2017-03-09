import React from 'react';

import CompactCard from '../../../lib/CompactCard';

const display1 = <CompactCard.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <CompactCard.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <CompactCard.Display text="display 3" />;
const display4 = <CompactCard.Display text="display 4" />;
const display5 = <CompactCard.Display text="display 5" />;
const display6 = <CompactCard.Display text="display 6" />;
const displays = [display1, display2, display3, display4, display5, display6];

const OneColumnLayoutCompactCard = () => <CompactCard displays={displays} />;
const TwoColumnLayoutCompactCard = () => <CompactCard displays={displays} layout="twoColumns" />;
const LeftThemeLayoutCompactCard = () => <CompactCard displays={displays} layout="twoColumns" textEmphasis="left" />;

export {
  OneColumnLayoutCompactCard,
  TwoColumnLayoutCompactCard,
  LeftThemeLayoutCompactCard,
};
