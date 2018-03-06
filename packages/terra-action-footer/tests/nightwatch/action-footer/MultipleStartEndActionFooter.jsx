import React from 'react';

import ActionFooter from '../../../lib/ActionFooter';

export default () => (
  <ActionFooter
    start={
      <div>
        <a href="/">Start Action 1</a>
        <button>Start Action 2</button>
      </div>
    }
    end={<div>
      <button>End Action 1</button>
      <a href="/">End Action 2</a>
      <button>End Action 3</button>
    </div>}
  />
);
