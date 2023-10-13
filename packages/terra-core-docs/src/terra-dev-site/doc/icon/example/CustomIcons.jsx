import React from 'react';
import { IconBase } from 'terra-icon';

const svgAttributes = { viewBox: '0 0 48 48', xmlns: 'http://www.w3.org/2000/svg' };
const CustomIcons = () => (
  <div>
    <p>
      Terra Icon exports a wrapper component
      {' '}
      <b>IconBase</b>
      {' '}
      which can be used to create custom SVG icons as shown below
    </p>
    <div>
      Decoratrive Custom Icons :
      &nbsp;
      <IconBase {...svgAttributes}>
        <path d="M47.2 24.9c1-.5 1-1.3 0-1.8L28 13.5 25 12c-.7-.3-2.9-1.5-3.9-2L1.9.4C.8-.1 0 .4 0 1.5V19c0 1.2.9 2.2 2.1 2.3L30.3 24c1.1.1 1.1.3 0 .4L2.1 27C.9 27.1 0 28 0 29.2v17.2c-.1.6.3 1.2.9 1.3.3 0 .6 0 .9-.2L21.1 38l3-1.5c.7-.3 2.9-1.5 3.9-2l19.2-9.6z" />
      </IconBase>
    </div>
    <div>
      Meaningfull Custom Icons :
      &nbsp;
      <IconBase a11yLabel="Add Icon" {...svgAttributes}>
        <path d="M48 21H27V0h-6v21H0v6h21v21h6V27h21z" />
      </IconBase>
    </div>
    <div>
      Custom Icons with Icon Attributes :
      &nbsp;
      <IconBase height="3em" width="3em" isSpin isBidi focusable {...svgAttributes}>
        <path d="M47.2 24.9c1-.5 1-1.3 0-1.8L28 13.5 25 12c-.7-.3-2.9-1.5-3.9-2L1.9.4C.8-.1 0 .4 0 1.5V19c0 1.2.9 2.2 2.1 2.3L30.3 24c1.1.1 1.1.3 0 .4L2.1 27C.9 27.1 0 28 0 29.2v17.2c-.1.6.3 1.2.9 1.3.3 0 .6 0 .9-.2L21.1 38l3-1.5c.7-.3 2.9-1.5 3.9-2l19.2-9.6z" />
      </IconBase>
    </div>
  </div>
);

export default CustomIcons;
