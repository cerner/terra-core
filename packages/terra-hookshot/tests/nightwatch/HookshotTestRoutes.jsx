/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import HookshotTests from './HookshotTests';

// Test Cases
import DefaultHookshot from './components/DefaultHookshot';
import HookshotCloseBehaviors from './components/HookshotCloseBehaviors';
import HookshotContentAttachmentTL from './components/HookshotContentAttachmentTS';
import HookshotContentAttachmentTC from './components/HookshotContentAttachmentTC';
import HookshotContentAttachmentTR from './components/HookshotContentAttachmentTE';
import HookshotContentAttachmentML from './components/HookshotContentAttachmentMS';
import HookshotContentAttachmentMC from './components/HookshotContentAttachmentMC';
import HookshotContentAttachmentMR from './components/HookshotContentAttachmentME';
import HookshotContentAttachmentBL from './components/HookshotContentAttachmentBS';
import HookshotContentAttachmentBC from './components/HookshotContentAttachmentBC';
import HookshotContentAttachmentBR from './components/HookshotContentAttachmentBE';
import HookshotContentOffset from './components/HookshotContentOffset';
import HookshotEnabledBehaviors from './components/HookshotEnabledBehaviors';
import HookshotTargetOffset from './components/HookshotTargetOffset';
import HookshotAttachmentBehaviorNone from './components/HookshotAttachmentBehaviorNone';
import HookshotAttachmentBehaviorFlip from './components/HookshotAttachmentBehaviorFlip';
import HookshotAttachmentBehaviorAuto from './components/HookshotAttachmentBehaviorAuto';
import AttachemntMargin from './components/HookshotAttachmentMargin';
import BoundingContainer from './components/HookshotBoundingContainer';

const routes = (
  <div>
    <Route path="/tests/hookshot-tests" component={HookshotTests} />
    <Route path="/tests/hookshot-tests/default" component={DefaultHookshot} />
    <Route path="/tests/hookshot-tests/close-behaviors" component={HookshotCloseBehaviors} />
    <Route path="/tests/hookshot-tests/content-attachment-top-start" component={HookshotContentAttachmentTL} />
    <Route path="/tests/hookshot-tests/content-attachment-top-center" component={HookshotContentAttachmentTC} />
    <Route path="/tests/hookshot-tests/content-attachment-top-end" component={HookshotContentAttachmentTR} />
    <Route path="/tests/hookshot-tests/content-attachment-middle-start" component={HookshotContentAttachmentML} />
    <Route path="/tests/hookshot-tests/content-attachment-middle-center" component={HookshotContentAttachmentMC} />
    <Route path="/tests/hookshot-tests/content-attachment-middle-end" component={HookshotContentAttachmentMR} />
    <Route path="/tests/hookshot-tests/content-attachment-bottom-start" component={HookshotContentAttachmentBL} />
    <Route path="/tests/hookshot-tests/content-attachment-bottom-center" component={HookshotContentAttachmentBC} />
    <Route path="/tests/hookshot-tests/content-attachment-bottom-end" component={HookshotContentAttachmentBR} />
    <Route path="/tests/hookshot-tests/content-offset" component={HookshotContentOffset} />
    <Route path="/tests/hookshot-tests/target-offset" component={HookshotTargetOffset} />
    <Route path="/tests/hookshot-tests/enabled-behaviors" component={HookshotEnabledBehaviors} />
    <Route path="/tests/hookshot-tests/attachment-behavior-none" component={HookshotAttachmentBehaviorNone} />
    <Route path="/tests/hookshot-tests/attachment-behavior-flip" component={HookshotAttachmentBehaviorFlip} />
    <Route path="/tests/hookshot-tests/attachment-behavior-auto" component={HookshotAttachmentBehaviorAuto} />
    <Route path="/tests/hookshot-tests/attachment-margin" component={AttachemntMargin} />
    <Route path="/tests/hookshot-tests/bounding-container" component={BoundingContainer} />
  </div>
);

export default routes;
