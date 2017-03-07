import React from 'react';

import CompactTile from '../../../lib/CompactTile';

const display1 = <CompactTile.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <CompactTile.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <CompactTile.Display text="display 3" />;
const display4 = <CompactTile.Display text="display 4" />;
const display5 = <CompactTile.Display text="display 5" />;
const display6 = <CompactTile.Display text="display 6" />;
const displays = [display1, display2, display3, display4, display5, display6];

const OneColumnLayoutCompactTile = () => <CompactTile displays={displays} />;
const TwoColumnLayoutCompactTile = () => <CompactTile displays={displays} layout="twoColumns" />;
const LeftThemeLayoutCompactTile = () => <CompactTile displays={displays} layout="twoColumns" textEmphasis="left" />;

export {
  OneColumnLayoutCompactTile,
  TwoColumnLayoutCompactTile,
  LeftThemeLayoutCompactTile,
};
