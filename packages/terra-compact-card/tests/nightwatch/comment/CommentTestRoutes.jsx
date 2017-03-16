/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CommentTests from './CommentTests';
import DefaultComment from './DefaultComment';
import TextComment from './TextComment';

const routes = (
  <div>
    <Route path="/tests/clinical-item-view-comment-tests" component={CommentTests} />
    <Route path="/tests/clinical-item-view-comment-tests/default" component={DefaultComment} />
    <Route path="/tests/clinical-item-view-comment-tests/text" component={TextComment} />
  </div>
);

export default routes;
