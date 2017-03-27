/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ClinicalItemViewTests from './ClinicalItemViewTests';
import DefaultClinicalItemView from './DefaultClinicalItemView';
import DisplaysClinicalItemView from './DisplaysClinicalItemView';
import AccessoryClinicalItemView from './AccessoryClinicalItemView';
import CommentClinicalItemView from './CommentClinicalItemView';

const routes = (
  <div>
    <Route path="/tests/clinical-item-view-tests" component={ClinicalItemViewTests} />
    <Route path="/tests/clinical-item-view-tests/default" component={DefaultClinicalItemView} />
    <Route path="/tests/clinical-item-view-tests/displays" component={DisplaysClinicalItemView} />
    <Route path="/tests/clinical-item-view-tests/accessory" component={AccessoryClinicalItemView} />
    <Route path="/tests/clinical-item-view-tests/comment" component={CommentClinicalItemView} />
  </div>
);

export default routes;
