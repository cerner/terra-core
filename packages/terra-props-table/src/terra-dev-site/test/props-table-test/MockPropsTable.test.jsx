import React from 'react';
import PropsTable from '../../../PropsTable';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/first
import MockSrc from '!raw-loader!../../../../src/terra-dev-site/test/props-table-test/MockComponent';

const MockPropsTable = () => (
  <div>
    <PropsTable id="PropsTable" src={MockSrc} />
    <p data-terra-bottom-scroll-marker>Marker for scrolling during tests</p>
  </div>
);

export default MockPropsTable;
