import React from 'react';
import Base from '../../lib/Base';

const ArrayBase = () => (
  <div>
    <Base>
      <div id="one">One</div>
    </Base>

    <Base locale="en-US">
      <div id="two">Two</div>
    </Base>
  </div>
);

export default ArrayBase;
