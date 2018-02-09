/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SlidePanelTests from './SlidePanelTests';
import SlidePanelDefault from './components/SlidePanelDefault';
import SlidePanelOverlay from './components/SlidePanelOverlay';
import SlidePanelSquish from './components/SlidePanelSquish';
import SlidePanelEnd from './components/SlidePanelEnd';
import SlidePanelStart from './components/SlidePanelStart';
import SlidePanelSmall from './components/SlidePanelSmall';
import SlidePanelLarge from './components/SlidePanelLarge';
import SlidePanelOpen from './components/SlidePanelOpen';
import SlidePanelFill from './components/SlidePanelFill';
import SlidePanelFullscreen from './components/SlidePanelFullscreen';
import SlidePanelSquishLarge from '../../examples/test-examples/SlidePanelSquishLarge';

const routes = (
  <div>
    <Route path="/tests/slide-panel-tests" component={SlidePanelTests} />
    <Route path="/tests/slide-panel-tests/default" component={SlidePanelDefault} />
    <Route path="/tests/slide-panel-tests/behavior-overlay" component={SlidePanelOverlay} />
    <Route path="/tests/slide-panel-tests/behavior-squish" component={SlidePanelSquish} />
    <Route path="/tests/slide-panel-tests/position-start" component={SlidePanelStart} />
    <Route path="/tests/slide-panel-tests/position-end" component={SlidePanelEnd} />
    <Route path="/tests/slide-panel-tests/size-small" component={SlidePanelSmall} />
    <Route path="/tests/slide-panel-tests/size-large" component={SlidePanelLarge} />
    <Route path="/tests/slide-panel-tests/open" component={SlidePanelOpen} />
    <Route path="/tests/slide-panel-tests/fill" component={SlidePanelFill} />
    <Route path="/tests/slide-panel-tests/fullscreen" component={SlidePanelFullscreen} />
    <Route path="/tests/slide-panel-tests/behavior-squish-size-large" component={SlidePanelSquishLarge} />
  </div>
);

export default routes;
