import React from 'react';
import PropsTable from '../../../PropsTable';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import MockSrc from '!raw-loader!../../../../src/terra-dev-site/test/props-table-test/MockComponent';

const MockPropsTableWithTitle = () => (
  <div>
    <PropsTable id="PropsTable" src={MockSrc} componentName="Mock Component" />
    <p data-terra-bottom-scroll-marker>Marker for scrolling during tests</p>
  </div>
);

export default MockPropsTableWithTitle;
