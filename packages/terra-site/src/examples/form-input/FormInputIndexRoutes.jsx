/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Form Component Indexes
import InputFieldIndex from './InputFieldIndex';

const routes = (
  <div>
    <Route path="/site/form/form-input/input-field" component={InputFieldIndex} />
  </div>
);

export default routes;
