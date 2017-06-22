/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ProfileImageTests from './ProfileImageTests';

// Components
import ProfileImageDefault from './ProfileImageDefault';
import ProfileImageCarryforward from './ProfileImageCarryforward';

const routes = (
  <div>
    <Route path="/tests/profile-image-tests" component={ProfileImageTests} />
    <Route path="/tests/profile-image-tests/default" component={ProfileImageDefault} />
    <Route path="/tests/profile-image-tests/carryforward" component={ProfileImageCarryforward} />
  </div>
);

export default routes;

