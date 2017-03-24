import React from 'react';

import ClinicalItemView from 'terra-clinical-item-view';

const display1 = <ClinicalItemView.Display text="display1display1display1display1display1display1display1display1display1display1display1display1display1display1" />;
const display2 = <ClinicalItemView.Display text="display2display2display2display2display2display2display2display2display2display2display2display2display2display2" />;
const display3 = <ClinicalItemView.Display text="display 3" />;
const display4 = <ClinicalItemView.Display text="display 4" />;
const display5 = <ClinicalItemView.Display text="display 5" />;
const display6 = <ClinicalItemView.Display text="display 6" />;
const displays = [display1, display2, display3, display4, display5, display6];

const accessoryStart = <img alt="Graphic Start" />;
const accessoryEnd = <img alt="Graphic End" />;

const comment = <ClinicalItemView.Comment text="test comment" />;

export default () => <ClinicalItemView
  displays={displays}
  layout="twoColumns"
  isTruncated
  textEmphasis="start"
  startAccessory={accessoryStart}
  endAccessory={accessoryEnd}
  comment={comment}
/>;
