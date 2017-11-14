import React from 'react';
import Base from '../../lib/Base';

const ArrayBase = () => (
  <div>
    <Base>
      <div id="one">One</div>
      <div id="two">Two</div>
      <div id="three">Three</div>
    </Base>

    <Base locale="en-US">
      <div id="four">Four</div>
      <div id="five">Five</div>
      <div id="six">Six</div>
    </Base>
  </div>
);

export default ArrayBase;
