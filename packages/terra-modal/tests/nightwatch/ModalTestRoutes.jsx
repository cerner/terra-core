/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ModalTests from './ModalTests';
import DefaultModal from './DefaultModal';

const routes = (
  <div>
    <Route path="/tests/modal-tests" component={ModalTests} />
    <Route path="/tests/modal-tests/default" component={DefaultModal} />
  </div>
);

export default routes;
