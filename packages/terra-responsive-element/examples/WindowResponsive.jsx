import React from 'react';
import ResponsiveElement from '../src/ResponsiveElement';

const WindowResponsive = () => {
  const tiny = <div>Tiny</div>;
  const small = <div>Small</div>;
  const medium = <div>Medium</div>;
  const large = <div>Large</div>;
  const huge = <div>Huge</div>;
  const defaultElement = <div>Default</div>;
  return (
    <div style={{ border: '1px dashed grey', padding: '10px' }}>
      <ResponsiveElement
        responsiveTo="window"
        tiny={tiny}
        small={small}
        medium={medium}
        large={large}
        huge={huge}
        defaultElement={defaultElement}
      />
    </div>
  );
};


export default WindowResponsive;
