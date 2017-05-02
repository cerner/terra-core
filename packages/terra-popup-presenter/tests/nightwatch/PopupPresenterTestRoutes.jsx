/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import PopupPresenterTests from './PopupPresenterTests';
import DefaultPopupPresenter from './DefaultPopupPresenter';

const routes = (
  <div>
    <Route path="/tests/popup-presenter-tests" component={PopupPresenterTests} />
    <Route path="/tests/popup-presenter-tests/default" component={DefaultPopupPresenter} />
  </div>
);

export default routes;
