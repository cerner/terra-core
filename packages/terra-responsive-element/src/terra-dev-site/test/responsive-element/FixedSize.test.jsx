/**
 * This test file is intended to test that the responsive element does not update if the
 * parent has a fixed size that never changes.
 */

import React from 'react';
import ResponsiveElement from '../../../ResponsiveElement';

const FixedSize = () => (
  <div id="fixed-target">
    {/* eslint-disable-next-line react/forbid-dom-props */}
    <div style={{ width: '1000px' }}>
      <ResponsiveElement
        tiny={<div>Tiny</div>}
        small={<div>Small</div>}
        medium={<div>Medium</div>}
        large={<div>Large</div>}
        huge={<div>Huge</div>}
        enormous={<div>Enormous</div>}
      />
    </div>
  </div>
);

export default FixedSize;
