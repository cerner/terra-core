/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SpacerTests from './SpacerTests';

// Test Cases
import DefaultSpacer from './DefaultSpacer';
import SpacerSmall2 from './SpacerSmall-2';
import SpacerSmall1 from './SpacerSmall-1';
import SpacerSmall from './SpacerSmall';
import SpacerMedium from './SpacerMedium';
import SpacerLarge from './SpacerLarge';
import SpacerLarge1 from './SpacerLarge+1';
import SpacerLarge2 from './SpacerLarge+2';
import SpacerLarge3 from './SpacerLarge+3';
import SpacerLarge4 from './SpacerLarge+4';

const routes = (
  <div>
    <Route path="/tests/spacer-tests" component={SpacerTests} />
    <Route path="/tests/spacer-tests/default" component={DefaultSpacer} />
    <Route path="/tests/spacer-tests/SpacerSmall2" component={SpacerSmall2} />
    <Route path="/tests/spacer-tests/SpacerSmall1" component={SpacerSmall1} />
    <Route path="/tests/spacer-tests/SpacerSmall" component={SpacerSmall} />
    <Route path="/tests/spacer-tests/SpacerMedium" component={SpacerMedium} />
    <Route path="/tests/spacer-tests/SpacerLarge" component={SpacerLarge} />
    <Route path="/tests/spacer-tests/SpacerLarge1" component={SpacerLarge1} />
    <Route path="/tests/spacer-tests/SpacerLarge2" component={SpacerLarge2} />
    <Route path="/tests/spacer-tests/SpacerLarge3" component={SpacerLarge3} />
    <Route path="/tests/spacer-tests/SpacerLarge4" component={SpacerLarge4} />
  </div>
);

export default routes;
