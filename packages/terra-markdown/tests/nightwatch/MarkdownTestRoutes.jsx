/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import MarkdownTests from './MarkdownTests';

// components
import MockMarkdown from './MockMarkdown';

const routes = (
  <div>
    <Route path="/tests/markdown" component={MarkdownTests} />
    <Route path="/tests/markdown/default" component={MockMarkdown} />
  </div>
);

export default routes;
