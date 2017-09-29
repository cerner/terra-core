/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import HookshotTests from './HookshotTests';

// Test Cases
import DefaultHookshot from './DefaultHookshot';
import HookshotCloseBehaviors from './components/HookshotCloseBehaviors';
import HookshotContentAttachmentTL from './components/HookshotContentAttachmentTL';
import HookshotContentAttachmentTC from './components/HookshotContentAttachmentTC';
import HookshotContentAttachmentTR from './components/HookshotContentAttachmentTR';
import HookshotContentAttachmentML from './components/HookshotContentAttachmentML';
import HookshotContentAttachmentMC from './components/HookshotContentAttachmentMC';
import HookshotContentAttachmentMR from './components/HookshotContentAttachmentMR';
import HookshotContentAttachmentBL from './components/HookshotContentAttachmentBL';
import HookshotContentAttachmentBC from './components/HookshotContentAttachmentBC';
import HookshotContentAttachmentBR from './components/HookshotContentAttachmentBR';
import HookshotContentOffset from './components/HookshotContentOffset';
import HookshotEnabledBehaviors from './components/HookshotEnabledBehaviors';
import HookshotTargetOffset from './components/HookshotTargetOffset';

const routes = (
  <div>
    <Route path="/tests/hookshot-tests" component={HookshotTests} />
    <Route path="/tests/hookshot-tests/default" component={DefaultHookshot} />
    <Route path="/tests/hookshot-tests/close-behaviors" component={HookshotCloseBehaviors} />
    <Route path="/tests/hookshot-tests/content-attachment-top-left" component={HookshotContentAttachmentTL} />
    <Route path="/tests/hookshot-tests/content-attachment-top-center" component={HookshotContentAttachmentTC} />
    <Route path="/tests/hookshot-tests/content-attachment-top-right" component={HookshotContentAttachmentTR} />
    <Route path="/tests/hookshot-tests/content-attachment-middle-left" component={HookshotContentAttachmentML} />
    <Route path="/tests/hookshot-tests/content-attachment-middle-center" component={HookshotContentAttachmentMC} />
    <Route path="/tests/hookshot-tests/content-attachment-middle-right" component={HookshotContentAttachmentMR} />
    <Route path="/tests/hookshot-tests/content-attachment-bottom-left" component={HookshotContentAttachmentBL} />
    <Route path="/tests/hookshot-tests/content-attachment-bottom-center" component={HookshotContentAttachmentBC} />
    <Route path="/tests/hookshot-tests/content-attachment-bottom-right" component={HookshotContentAttachmentBR} />
    <Route path="/tests/hookshot-tests/content-offset" component={HookshotContentOffset} />
    <Route path="/tests/hookshot-tests/target-offset" component={HookshotTargetOffset} />
    <Route path="/tests/hookshot-tests/enabled-behaviors" component={HookshotEnabledBehaviors} />
  </div>
);

export default routes;
