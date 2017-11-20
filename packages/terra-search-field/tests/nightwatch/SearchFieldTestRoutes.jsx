/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SearchFieldTests from './SearchFieldTests';
import DefaultSearchField from './DefaultSearchField';
import PlaceholderSearchField from './PlaceholderSearchField';
import CallbackSearchField from './CallbackSearchField';
import DelayedSearchField from './DelayedSearchField';
import MinimumLengthSearchField from './MinimumLengthSearchField';
import AutoSearchDisabledSearchField from './AutoSearchDisabledSearchField';
import SearchFieldEnter from './SearchFieldEnter';

const routes = (
  <div>
    <Route path="/tests/search-field-tests" component={SearchFieldTests} />
    <Route path="/tests/search-field-tests/default" component={DefaultSearchField} />
    <Route path="/tests/search-field-tests/placeholder" component={PlaceholderSearchField} />
    <Route path="/tests/search-field-tests/callback" component={CallbackSearchField} />
    <Route path="/tests/search-field-tests/delayed" component={DelayedSearchField} />
    <Route path="/tests/search-field-tests/minimum-length" component={MinimumLengthSearchField} />
    <Route path="/tests/search-field-tests/disable-auto-search" component={AutoSearchDisabledSearchField} />
    <Route path="/tests/search-field-tests/enter" component={SearchFieldEnter} />
  </div>
);

export default routes;
