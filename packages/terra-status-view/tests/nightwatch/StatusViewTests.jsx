/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const StatusViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/status-view-tests/default">StatusView - Default</Link></li>
      <li><Link to="/tests/status-view-tests/error-all-props">StatusView - Error - All Props</Link></li>
      <li><Link to="/tests/status-view-tests/glyph-hidden">StatusView - Error - Glyph Hidden</Link></li>
      <li><Link to="/tests/status-view-tests/centered">StatusView - No Data - Centered</Link></li>
      <li><Link to="/tests/status-view-tests/align-top">StatusView - No Matching Results - Align Top</Link></li>
      <li><Link to="/tests/status-view-tests/not-authorized">StatusView - Not Authorized</Link></li>
      <li><Link to="/tests/status-view-tests/no-service">StatusView - No Service</Link></li>
      <li><Link to="/tests/status-view-tests/custom">StatusView - Custom - Empty</Link></li>
    </ul>
  </div>
);

export default StatusViewTests;
