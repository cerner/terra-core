/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import TextTests from './TextTests';

// Test Cases
import DefaultText from './DefaultText';
import TextColor from './TextColor';
import TextFontSize from './TextFontSize';
import TextItalics from './TextItalics';
import TextVisuallyHidden from './TextVisuallyHidden';
import TextVisualProps from './TextVisualProps';
import TextWeight from './TextWeight';

const routes = (
  <div>
    <Route path="/tests/text-tests" component={TextTests} />
    <Route path="/tests/text-tests/default" component={DefaultText} />
    <Route path="/tests/text-tests/color" component={TextColor} />
    <Route path="/tests/text-tests/font-size" component={TextFontSize} />
    <Route path="/tests/text-tests/italics" component={TextItalics} />
    <Route path="/tests/text-tests/visually-hidden" component={TextVisuallyHidden} />
    <Route path="/tests/text-tests/visual-props" component={TextVisualProps} />
    <Route path="/tests/text-tests/weight" component={TextWeight} />
  </div>
);

export default routes;
