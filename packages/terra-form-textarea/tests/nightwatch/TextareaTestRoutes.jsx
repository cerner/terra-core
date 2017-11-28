/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TextareaTests from './TextareaTests';

import DefaultTextarea from './DefaultTextarea';
import AutoResizableTextarea from './AutoResizableTextarea';
import AutoResizableTextareaMobileDocumentTouch from './AutoResizableTextareaMobileDocumentTouch';
import AutoResizableTextareaMobileOnTouchStart from './AutoResizableTextareaMobileOnTouchStart';
import AutoResizableTextareaMobileMaxTouchPoints from './AutoResizableTextareaMobileMaxTouchPoints';
import AutoResizableTextareaMobileMsMaxTouchPoints from './AutoResizableTextareaMobileMsMaxTouchPoints';
import PopulatedTextarea from './PopulatedTextarea';
import RowsTextarea from './RowsTextarea';
import SmallTextarea from './SmallTextarea';
import MediumTextarea from './MediumTextarea';
import LargeTextarea from './LargeTextarea';
import FullTextarea from './FullTextarea';
import InvalidTextarea from './InvalidTextarea';

const routes = (
  <div>
    <Route path="/tests/form-textarea-tests" component={TextareaTests} />
    <Route path="/tests/form-textarea-tests/auto-resizable" component={AutoResizableTextarea} />
    <Route path="/tests/form-textarea-tests/default" component={DefaultTextarea} />
    <Route path="/tests/form-textarea-tests/populated" component={PopulatedTextarea} />
    <Route path="/tests/form-textarea-tests/small" component={SmallTextarea} />
    <Route path="/tests/form-textarea-tests/medium" component={MediumTextarea} />
    <Route path="/tests/form-textarea-tests/invalid" component={InvalidTextarea} />
    <Route path="/tests/form-textarea-tests/large" component={LargeTextarea} />
    <Route path="/tests/form-textarea-tests/full" component={FullTextarea} />
    <Route path="/tests/form-textarea-tests/rows" component={RowsTextarea} />
    <Route path="/tests/form-textarea-tests/mobile-document-touch" component={AutoResizableTextareaMobileDocumentTouch} />
    <Route path="/tests/form-textarea-tests/mobile-ontouchstart" component={AutoResizableTextareaMobileOnTouchStart} />
    <Route path="/tests/form-textarea-tests/mobile-max-touch-points" component={AutoResizableTextareaMobileMaxTouchPoints} />
    <Route path="/tests/form-textarea-tests/mobile-ms-max-touch-points" component={AutoResizableTextareaMobileMsMaxTouchPoints} />
  </div>
);

export default routes;
