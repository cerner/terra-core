/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import HeadingTests from './HeadingTests';

// Test Cases
import DefaultHeading from './DefaultHeading';
import HeadingColor from './HeadingColor';
import HeadingSize from './HeadingSize';
import HeadingItalics from './HeadingItalics';
import HeadingLevels from './HeadingLevels';
import HeadingVisuallyHidden from './HeadingVisuallyHidden';
import HeadingVisualProps from './HeadingVisualProps';
import HeadingWeight from './HeadingWeight';

const routes = (
  <div>
    <Route path="/tests/heading-tests" component={HeadingTests} />
    <Route path="/tests/heading-tests/default" component={DefaultHeading} />
    <Route path="/tests/heading-tests/color" component={HeadingColor} />
    <Route path="/tests/heading-tests/size" component={HeadingSize} />
    <Route path="/tests/heading-tests/italics" component={HeadingItalics} />
    <Route path="/tests/heading-tests/levels" component={HeadingLevels} />
    <Route path="/tests/heading-tests/visually-hidden" component={HeadingVisuallyHidden} />
    <Route path="/tests/heading-tests/visual-props" component={HeadingVisualProps} />
    <Route path="/tests/heading-tests/weight" component={HeadingWeight} />
  </div>
);

export default routes;
