// This file is autogenerated from scripts/src/generate-example
import React from 'react';
import IconAlert from '../src/icon/IconAlert';

const divStyle = {
  fontSize: '5em',
};

const IconHeightWidth = () => (
  <div>
    <h3>Default</h3>
    <IconAlert />
    <h3>Height and Width are 50px</h3>
    <IconAlert height="50" width="50" />
    <h3>Height and Width are 5em</h3>
    <IconAlert height="5em" width="5em" />
    <h3>Container font size is 5em</h3>
    <div style={divStyle}>
      <IconAlert />
    </div>
    <h3>Height of 5em</h3>
    <IconAlert height="5em" />
    <h3>Width of 5em</h3>
    <IconAlert width="5em" />
  </div>
);

export default IconHeightWidth;
