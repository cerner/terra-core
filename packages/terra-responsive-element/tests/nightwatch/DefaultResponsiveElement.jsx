import React from 'react';
import ResponsiveElement from '../../lib/ResponsiveElement';

const windowSizes = {
  default: [470, 768],
  tiny: [622, 768],
  small: [838, 768],
  medium: [1000, 768],
  large: [1300, 768],
  huge: [1500, 768],
};

const responsiveElement = (
  <ResponsiveElement
    className="terra-ResponsiveElement"
    defaultElement={<div>Default</div>}
    tiny={<div>Tiny</div>}
    small={<div>Small</div>}
    medium={<div>Medium</div>}
    large={<div>Large</div>}
    huge={<div>Huge</div>}
  />
);

function getStyle(size) {
  return { width: windowSizes[size][0], height: '200px', border: '1px dashed grey' };
}

const DefaultResponsiveElement = () => <div style={getStyle('default')}>{responsiveElement}</div>;
const TinyResponsiveElement = () => <div style={getStyle('tiny')}>{responsiveElement}</div>;
const SmallResponsiveElement = () => <div style={getStyle('small')}>{responsiveElement}</div>;
const MediumResponsiveElement = () => <div style={getStyle('medium')}>{responsiveElement}</div>;
const LargeResponsiveElement = () => <div style={getStyle('large')}>{responsiveElement}</div>;
const HugeResponsiveElement = () => <div style={getStyle('huge')}>{responsiveElement}</div>;

export {
  DefaultResponsiveElement,
  TinyResponsiveElement,
  SmallResponsiveElement,
  MediumResponsiveElement,
  LargeResponsiveElement,
  HugeResponsiveElement,
};
