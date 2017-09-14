/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SignatureTests from './SignatureTests';

// Test Cases
import SignatureDefault from './SignatureDefault';

const routes = (
  <div>
    <Route path="/tests/signature-tests" component={SignatureTests} />
    <Route path="/tests/signature-tests/default" component={SignatureDefault} />
  </div>
);

export default routes;
