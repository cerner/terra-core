/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import CommentTests from './CommentTests';
import DefaultComment from './DefaultComment';
import TextComment from './TextComment';

const routes = (
  <div>
    <Route path="/tests/comment-tests" component={CommentTests} />
    <Route path="/tests/comment-tests/default" component={DefaultComment} />
    <Route path="/tests/comment-tests/displays" component={TextComment} />
  </div>
);

export default routes;
