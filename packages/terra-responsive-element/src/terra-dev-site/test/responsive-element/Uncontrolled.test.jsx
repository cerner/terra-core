/**
 * This test file is intended to test that an uncontrolled implementation of the responsive element
 * renders the correct component at every breakpoint.
 */

import React from 'react';
import ResponsiveElement from '../../../ResponsiveElement';

const Uncontrolled = () => (
  <ResponsiveElement
    tiny={<div>Tiny</div>}
    small={<div>Small</div>}
    medium={<div>Medium</div>}
    large={<div>Large</div>}
    huge={<div>Huge</div>}
    enormous={<div>Enormous</div>}
  />
);

export default Uncontrolled;
