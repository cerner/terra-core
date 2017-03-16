import React from 'react';

import ClincalItemView from '../lib/ClincalItemView';

const display1 = <ClincalItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <ClincalItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <ClincalItemView.Display text="display 3" />;
const display4 = <ClincalItemView.Display text="display 4" />;
const display5 = <ClincalItemView.Display text="display 5" />;
const display6 = <ClincalItemView.Display text="display 6" />;
const displays = [display1, display2, display3, display4, display5, display6];

export default () => <ClincalItemView displays={displays} layout="twoColumns" textEmphasis="left" />;
