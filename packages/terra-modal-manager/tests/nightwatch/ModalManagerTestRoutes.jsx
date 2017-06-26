/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ModalManagerTests from './ModalManagerTests';

// Test Cases
import ModalManagerDemo from './ModalManagerDemo';

const routes = (
  <div>
    <Route path="/tests/modal-manager-tests" component={ModalManagerTests} />
    <Route path="/tests/modal-manager-tests/demo" component={ModalManagerDemo} />
  </div>
);

export default routes;
