import React from 'react';
import Toggler from '../../../lib/Toggler';
import TogglerSetup from './TogglerSetup';

const TogglerNoAnimation = () => (
  <Toggler header={TogglerSetup.header} isAnimated={false}>
    {TogglerSetup.children}
  </Toggler>
);

export default TogglerNoAnimation;
