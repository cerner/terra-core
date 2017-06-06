/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import PopupPresenterTests from './PopupPresenterTests';
import DefaultPopupPresenter from './components/DefaultPopupPresenter';
import ArrowPopupPresenter from './components/ArrowPopupPresenter';
import ClassNamePopupPresenter from './components/ClassNamePopupPresenter';
import BoundedPopupPresenter from './components/BoundedPopupPresenter';
import NoHeaderPopupPresenter from './components/NoHeaderPopupPresenter';
import SmallPopupPresenter from './components/SmallPopupPresenter';
import MediumPopupPresenter from './components/MediumPopupPresenter';
import LargePopupPresenter from './components/LargePopupPresenter';

const routes = (
  <div>
    <Route path="/tests/popup-presenter-tests" component={PopupPresenterTests} />
    <Route path="/tests/popup-presenter-tests/default" component={DefaultPopupPresenter} />
    <Route path="/tests/popup-presenter-tests/arrow" component={ArrowPopupPresenter} />
    <Route path="/tests/popup-presenter-tests/class-name" component={ClassNamePopupPresenter} />
    <Route path="/tests/popup-presenter-tests/bounded" component={BoundedPopupPresenter} />
    <Route path="/tests/popup-presenter-tests/no-header" component={NoHeaderPopupPresenter} />
    <Route path="/tests/popup-presenter-tests/small" component={SmallPopupPresenter} />
    <Route path="/tests/popup-presenter-tests/medium" component={MediumPopupPresenter} />
    <Route path="/tests/popup-presenter-tests/large" component={LargePopupPresenter} />
  </div>
);

export default routes;
