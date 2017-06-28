/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ProfileImageTests from './ProfileImageTests';

// Components
import ProfileImageDefault from './ProfileImageDefault';

const routes = (
  <div>
    <Route path="/tests/profile-image-tests" component={ProfileImageTests} />
    <Route path="/tests/profile-image-tests/default" component={ProfileImageDefault} />
  </div>
);

export default routes;

