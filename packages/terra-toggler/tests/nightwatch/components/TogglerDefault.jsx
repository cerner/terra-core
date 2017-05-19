import React from 'react';
import Toggler from '../../../lib/Toggler';
import TogglerSetup from './TogglerSetup';

const TogglerDefault = () => (
  <Toggler header={TogglerSetup.header}>
    {TogglerSetup.children}
  </Toggler>
);

export default TogglerDefault;
