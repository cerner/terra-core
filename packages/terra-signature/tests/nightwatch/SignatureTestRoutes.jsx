/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SignatureTests from './SignatureTests';

// Test Cases
import DefaultSignature from './DefaultSignature';

const routes = (
  <div>
    <Route path="/tests/signature-tests" component={SignatureTests} />
    <Route path="/tests/signature-tests/default" component={DefaultSignature} />
  </div>
);

export default routes;
