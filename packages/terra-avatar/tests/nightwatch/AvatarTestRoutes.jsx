/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import AvatarTests from './AvatarTests';

// Test Cases
import UserAvatar from './UserAvatar';
import FacilityAvatar from './FacilityAvatar';
import ImageAvatar from './ImageAvatar';
import TwoInitialsAvatar from './TwoInitialsAvatar';
import ThreeInitialsAvatar from './ThreeInitialsAvatar';

const routes = (
  <div>
    <Route path="/tests/avatar-tests" component={AvatarTests} />
    <Route path="/tests/avatar-tests/user" component={UserAvatar} />
    <Route path="/tests/avatar-tests/facility" component={FacilityAvatar} />
    <Route path="/tests/avatar-tests/image" component={ImageAvatar} />
    <Route path="/tests/avatar-tests/two-initials" component={TwoInitialsAvatar} />
    <Route path="/tests/avatar-tests/three-initials" component={ThreeInitialsAvatar} />
  </div>
);

export default routes;
