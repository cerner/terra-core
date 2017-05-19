import React from 'react';
import Toggler from '../../../lib/Toggler';
import TogglerSetup from './TogglerSetup';

const TogglerRenderOpen = () => (
  <Toggler header={TogglerSetup.header} isOpen>
    {TogglerSetup.children}
  </Toggler>
);

export default TogglerRenderOpen;
