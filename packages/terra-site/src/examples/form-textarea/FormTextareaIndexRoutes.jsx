/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';

// Form Component Indexes
import TextareaFieldIndex from './TextareaFieldIndex';

const routes = (
  <div>
    <Route path="/site/form/form-input/textarea-field" component={TextareaFieldIndex} />
  </div>
);

export default routes;
