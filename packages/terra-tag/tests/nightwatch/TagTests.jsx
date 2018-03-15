/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TagTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/tag-tests/default-tag">Tag - Default</Link></li>
      <li><Link to="/tests/tag-tests/default-on-click-tag"> Tag - Default OnClick</Link></li>
      <li><Link to="/tests/tag-tests/on-click-tag">Tag - OnClick</Link></li>
      <li><Link to="/tests/tag-tests/href-tag">Tag - Href</Link></li>
      <li><Link to="/tests/tag-tests/icon-and-text-tag">Tag - Icon and Text</Link></li>
      <li><Link to="/tests/tag-tests/icon-and-long-text-tag">Tag - Icon and Long Text</Link></li>
      <li><Link to="/tests/tag-tests/multiple-tags">Tag - Multiple</Link></li>
    </ul>
  </div>
);

export default TagTests;
