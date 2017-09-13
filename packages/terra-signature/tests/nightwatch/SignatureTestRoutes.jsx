/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SignatureTests from './SignatureTests';

// Test Cases
import SignatureExample from './SignatureExample';
import SingleLine from './SingleLine';

const routes = (
  <div>
    <Route path="/tests/signature-tests" component={SignatureTests} />
    <Route path="/tests/signature-tests/default" component={SignatureExample} />
    <Route path="/tests/signature-tests/singleline" component={SingleLine} />
  </div>
);

export default routes;
