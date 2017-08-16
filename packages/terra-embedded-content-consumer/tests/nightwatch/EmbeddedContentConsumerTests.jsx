/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const EmbeddedContentConsumerTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/embedded-content-consumer-tests/basic-consumer">EmbeddedContentConsumer - Basic Consumer</Link></li>
      <li><Link to="/tests/embedded-content-consumer-tests/custom-event-consumer">EmbeddedContentConsumer - Custom event Consumer</Link></li>
      <li><Link to="/tests/embedded-content-consumer-tests/custom-events-consumer">EmbeddedContentConsumer - Custom events Consumer</Link></li>
      <li><Link to="/tests/embedded-content-consumer-tests/data-status-consumer">EmbeddedContentConsumer - Data status Consumer</Link></li>
      <li><Link to="/tests/embedded-content-consumer-tests/fill-consumer">EmbeddedContentConsumer - Fill Consumer</Link></li>
      <li><Link to="/tests/embedded-content-consumer-tests/full-screen-consumer">EmbeddedContentConsumer - Full screen Consumer</Link></li>
      <li><Link to="/tests/embedded-content-consumer-tests/on-ready-consumer">EmbeddedContentConsumer - On Ready Consumer</Link></li>
    </ul>
  </div>
);

export default EmbeddedContentConsumerTests;
