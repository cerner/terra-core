import React from 'react';
import PropsTable from '../../lib/PropsTable';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import IconSrc from '!raw-loader!./MockComponent';

const IconExamples = () => (
  <div>
    <PropsTable id="PropsTable" src={IconSrc} componentName="Mock Component" />
    <p data-terra-bottom-scroll-marker>text</p>
  </div>
);

export default IconExamples;
