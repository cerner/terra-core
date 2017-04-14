/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import ArrangeTests from './ArrangeTests';
import AlignedAllArrange from './AlignedAllArrange';
import AlignedFitEndFillArrange from './AlignedFitEndFillArrange';
import AlignedFitStartFillArrange from './AlignedFitStartFillArrange';
import IndividuallyAlignedFitStart from './IndividuallyAlignedFitStart';
import IndividuallyAlignedFill from './IndividuallyAlignedFill';
import IndividuallyAlignedFitEnd from './IndividuallyAlignedFitEnd';


const routes = (
  <div>
    <Route path="/tests/arrange-tests" component={ArrangeTests} />
    <Route path="/tests/arrange-tests/aligned-all-arrange" component={AlignedAllArrange} />
    <Route path="/tests/arrange-tests/aligned-all-arrange-fit-end-fill" component={AlignedFitEndFillArrange} />
    <Route path="/tests/arrange-tests/aligned-all-arrange-fit-start-fill" component={AlignedFitStartFillArrange} />
    <Route path="/tests/arrange-tests/aligned-individually-fit-start" component={IndividuallyAlignedFitStart} />
    <Route path="/tests/arrange-tests/aligned-individually-fill" component={IndividuallyAlignedFill} />
    <Route path="/tests/arrange-tests/aligned-individually-fit-end" component={IndividuallyAlignedFitEnd} />
  </div>
);

export default routes;
