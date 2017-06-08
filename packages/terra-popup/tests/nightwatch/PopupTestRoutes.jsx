/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import PopupTests from './PopupTests';
import DefaultPopup from './components/DefaultPopup';
import ArrowPopup from './components/ArrowPopup';
import ClassNamePopup from './components/ClassNamePopup';
import BoundedPopup from './components/BoundedPopup';
import NoHeaderPopup from './components/NoHeaderPopup';
import SmallPopup from './components/SmallPopup';
import MediumPopup from './components/MediumPopup';
import LargePopup from './components/LargePopup';

const routes = (
  <div>
    <Route path="/tests/popup-tests" component={PopupTests} />
    <Route path="/tests/popup-tests/default" component={DefaultPopup} />
    <Route path="/tests/popup-tests/arrow" component={ArrowPopup} />
    <Route path="/tests/popup-tests/class-name" component={ClassNamePopup} />
    <Route path="/tests/popup-tests/bounded" component={BoundedPopup} />
    <Route path="/tests/popup-tests/no-header" component={NoHeaderPopup} />
    <Route path="/tests/popup-tests/small" component={SmallPopup} />
    <Route path="/tests/popup-tests/medium" component={MediumPopup} />
    <Route path="/tests/popup-tests/large" component={LargePopup} />
  </div>
);

export default routes;
