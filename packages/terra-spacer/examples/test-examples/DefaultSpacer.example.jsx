import React from 'react';

import Spacer from '../../lib/Spacer';

export default () => (
  <div>
    <h3>Background color added for context.</h3>
    <div className="spacing-demo spacer-demo-margin">
      <Spacer id="spacer"><div style={{ background: 'rgb(141, 182, 193)' }}>Test Component</div></Spacer>
    </div>
  </div>
);
