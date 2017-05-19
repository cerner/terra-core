/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SearchFieldTests from './SearchFieldTests';
import DefaultSearchField from './DefaultSearchField';
import PlaceholderSearchField from './PlaceholderSearchField';

const routes = (
  <div>
    <Route path="/tests/search-field-tests" component={SearchFieldTests} />
    <Route path="/tests/search-field-tests/default" component={DefaultSearchField} />
    <Route path="/tests/search-field-tests/placeholder" component={PlaceholderSearchField} />
  </div>
);

export default routes;
