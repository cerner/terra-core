/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const SpacerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/spacer-tests/default">Spacer-Default</Link></li>
      <li><Link to="/tests/spacer-tests/SpacerSmall2">Spacer-Small-2</Link></li>
      <li><Link to="/tests/spacer-tests/SpacerSmall1">Spacer-Small-1</Link></li>
      <li><Link to="/tests/spacer-tests/SpacerSmall">Spacer-Small</Link></li>
      <li><Link to="/tests/spacer-tests/SpacerMedium">Spacer-Medium</Link></li>
      <li><Link to="/tests/spacer-tests/SpacerLarge">Spacer-Large</Link></li>
      <li><Link to="/tests/spacer-tests/SpacerLarge1">Spacer-Large+1</Link></li>
      <li><Link to="/tests/spacer-tests/SpacerLarge2">Spacer-Large+2</Link></li>
      <li><Link to="/tests/spacer-tests/SpacerLarge3">Spacer-Large+3</Link></li>
      <li><Link to="/tests/spacer-tests/SpacerLarge4">Spacer-Large+4</Link></li>
    </ul>
  </div>
);

export default SpacerTests;
