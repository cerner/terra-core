import React from 'react';

import ActionFooter from '../../../lib/ActionFooter';

export default () => (
  <ActionFooter
    end={<div>
      <button>End Action 1</button>
      <a href="/">End Action 2</a>
      <button>End Action 3</button>
    </div>}
  />
);
