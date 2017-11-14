/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import SearchFieldTests from './SearchFieldTests';
import DefaultSearchField from './DefaultSearchField';
import PlaceholderSearchField from './PlaceholderSearchField';
import CallbackSearchField from './CallbackSearchField';
import DelayedSearchField from './DelayedSearchField';
import MinimumLengthSearchField from './MinimumLengthSearchField';
import SearchFieldDisabled from './SearchFieldDisabled';
import SearchFieldBlock from './SearchFieldBlock';

const routes = (
  <div>
    <Route path="/tests/search-field-tests" component={SearchFieldTests} />
    <Route path="/tests/search-field-tests/default" component={DefaultSearchField} />
    <Route path="/tests/search-field-tests/placeholder" component={PlaceholderSearchField} />
    <Route path="/tests/search-field-tests/callback" component={CallbackSearchField} />
    <Route path="/tests/search-field-tests/delayed" component={DelayedSearchField} />
    <Route path="/tests/search-field-tests/minimum-length" component={MinimumLengthSearchField} />
    <Route path="/tests/search-field-tests/disabled" component={SearchFieldDisabled} />
    <Route path="/tests/search-field-tests/block" component={SearchFieldBlock} />
  </div>
);

export default routes;
