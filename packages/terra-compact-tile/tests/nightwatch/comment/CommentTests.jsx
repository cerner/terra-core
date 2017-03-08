/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const CommentTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/comment-tests/default">Default Comment</Link></li>
      <li><Link to="/tests/comment-tests/text">Text Comment</Link></li>
    </ul>
  </div>
);

export default CommentTests;
