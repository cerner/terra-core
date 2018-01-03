/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const AlertTests = () => (
  <div>
    <ul>
      <li>
        Alert with no props defaults to type alert - text content provided.
        <Link to="/tests/alert-tests/default">Alert Default</Link>
      </li>
      <li>
        Alerts of each of the standard types with default titles.
        <Link to="/tests/alert-tests/type">Alert Type</Link>
      </li>
      <li>
        Alerts of the standard types with custom titles.
        <Link to="/tests/alert-tests/title">Alert Title</Link>
      </li>
      <li>
        Custom Alerts with all permutations of title, custom color and custom icon.
        <Link to="/tests/alert-tests/custom">Alert Custom</Link>
      </li>
      <li>
        Alert where alertAction prop is provided containing an action button.
        <Link to="/tests/alert-tests/actionButton">Alert Action Button</Link>
      </li>
      <li>
        Alert with onDismiss prop triggering Dismiss button to be rendered. Custom onDismiss callback rerenders page without the Alert.
        <Link to="/tests/alert-tests/dismissible">Alert Dismissible</Link>
      </li>
      <li><Link to="/tests/alert-tests/responsive">Alert Responsive To Parent</Link></li>
    </ul>
  </div>
);

export default AlertTests;
