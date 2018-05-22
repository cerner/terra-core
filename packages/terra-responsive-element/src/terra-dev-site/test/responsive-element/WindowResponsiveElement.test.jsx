import React from 'react';
import ResponsiveElement from '../../../ResponsiveElement';

export default () => (
  <div style={{ width: '200px', height: '200px', border: '1px dashed grey' }}>
    <ResponsiveElement
      className="terra-ResponsiveElement"
      responsiveTo="window"
      defaultElement={<div>Default</div>}
      tiny={<div>Tiny</div>}
      small={<div>Small</div>}
      medium={<div>Medium</div>}
      large={<div>Large</div>}
      huge={<div>Huge</div>}
    />
  </div>
);
