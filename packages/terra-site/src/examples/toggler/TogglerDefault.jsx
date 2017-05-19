import React from 'react';
import Toggler from 'terra-toggler';
import TogglerSetup from './TogglerSetup';

const TogglerDefault = () => (
  <Toggler header={TogglerSetup.header}>
    {TogglerSetup.children}
  </Toggler>
);

export default TogglerDefault;
