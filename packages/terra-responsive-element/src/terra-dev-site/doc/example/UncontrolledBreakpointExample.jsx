import React from 'react';
import {Placeholder} from '@cerner/terra-docs';
import ResponsiveElement from 'terra-responsive-element';

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
