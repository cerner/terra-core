import React from 'react';
import Spacer from 'terra-spacer';
import Checkbox from '../../../../Checkbox';
const CheckboxSample = () => (
  <div>
    <div>
    <Spacer isInlineBlock><Checkbox labelText="Can you see me?" isLabelHidden /></Spacer>
    <span>no apart of checkbox</span>
  </div> 
    <div>
    <Spacer isInlineBlock><Checkbox labelText="Can you see me?" /></Spacer>
    <span>no apart of checkbox</span>
  </div>
  </div>
);

export default CheckboxSample;
