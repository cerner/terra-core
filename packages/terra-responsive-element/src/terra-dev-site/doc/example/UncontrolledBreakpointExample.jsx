/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import React from 'react';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import ResponsiveElement from '../../../ResponsiveElement';

const UncontrolledExample = () => (
  <ResponsiveElement
    tiny={<Placeholder title="tiny" />}
    small={<Placeholder title="small" />}
    medium={<Placeholder title="medium" />}
    large={<Placeholder title="large" />}
    huge={<Placeholder title="huge" />}
    enormous={<Placeholder title="enormous" />}
  />
);

export default UncontrolledExample;
