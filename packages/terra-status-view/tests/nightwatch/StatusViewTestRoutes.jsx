/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import StatusViewTests from './StatusViewTests';

// Test Cases
import StatusViewDefault from './StatusViewDefault';
import StatusViewErrorAllProps from './StatusViewErrorAllProps';
import StatusViewGlyphHidden from './StatusViewGlyphHidden';
import StatusViewHeightTooSmall from './StatusViewHeightTooSmall';
import StatusViewCenter from './StatusViewCenter';
import StatusViewAlignTop from './StatusViewAlignTop';
import StatusViewNotAuthorized from './StatusViewNotAuthorized';
import StatusViewCustom from './StatusViewCustom';
import StatusViewTextWrapping from './StatusViewTextWrapping';

const routes = (
  <div>
    <Route path="/tests/status-view-tests" component={StatusViewTests} />
    <Route path="/tests/status-view-tests/default" component={StatusViewDefault} />
    <Route path="/tests/status-view-tests/error-all-props" component={StatusViewErrorAllProps} />
    <Route path="/tests/status-view-tests/glyph-hidden" component={StatusViewGlyphHidden} />
    <Route path="/tests/status-view-tests/height-too-small" component={StatusViewHeightTooSmall} />
    <Route path="/tests/status-view-tests/centered" component={StatusViewCenter} />
    <Route path="/tests/status-view-tests/align-top" component={StatusViewAlignTop} />
    <Route path="/tests/status-view-tests/not-authorized" component={StatusViewNotAuthorized} />
    <Route path="/tests/status-view-tests/custom" component={StatusViewCustom} />
    <Route path="/tests/status-view-tests/text-wrapping" component={StatusViewTextWrapping} />
  </div>
);

export default routes;
