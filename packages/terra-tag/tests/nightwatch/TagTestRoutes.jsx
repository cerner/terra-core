/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import TagTests from './TagTests';

// Test Cases
import { DefaultTag, HrefTag } from './DefaultTag';
import { IconTag, LongTextIconTag } from './IconAndTextTag';
import MultipleTags from './MultipleTags';

const routes = (
  <div>
    <Route path="/tests/tag-tests" component={TagTests} />
    <Route path="/tests/tag-tests/default-tag" component={DefaultTag} />
    <Route path="/tests/tag-tests/href-tag" component={HrefTag} />
    <Route path="/tests/tag-tests/icon-and-text-tag" component={IconTag} />
    <Route path="/tests/tag-tests/icon-and-long-text-tag" component={LongTextIconTag} />
    <Route path="/tests/tag-tests/multiple-tags" component={MultipleTags} />
  </div>
);

export default routes;
