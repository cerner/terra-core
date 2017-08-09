import React from 'react';
import PropsTable from '../../lib/PropsTable';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import MockSrc from '!raw-loader!./MockComponent';

const MockExample = () => (
  <div>
    <PropsTable id="PropsTable" src={MockSrc} />
  </div>
);

export default MockExample;
