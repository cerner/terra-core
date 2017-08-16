/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'xfc';

function DataStatusProvider() {
  Provider.init({
    acls: ['*'],
    secret: 'OAuth Secret',
  });

  return (
    <div>
      <title>Embedded Application Lifecycle</title>
      <meta charSet="utf-8" />
      <div>
        <h1>Embedded Application Lifecycle</h1>
        <p>The embedded container can have the following statuses:</p>
        <ul id="LifeCycleStatuses">
          <li id="Mounted">Mounted</li>
        </ul>
      </div>
    </div>
  );
}

export default DataStatusProvider;
