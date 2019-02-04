import React from 'react';
import PropsTable from '../../../PropsTable';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import MockSrc from '!raw-loader!../../../../src/terra-dev-site/test/props-table-test/MockPrivatePropsComponent';

const MockPrivatePropsTable = () => (
  <div>
    <PropsTable id="PrivatePropsTable" src={MockSrc} />
  </div>
);

export default MockPrivatePropsTable;
