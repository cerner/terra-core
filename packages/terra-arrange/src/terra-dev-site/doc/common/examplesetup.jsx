import React from 'react';
import PropTypes from 'prop-types';
import IconAlert from 'terra-icon/lib/icon/IconAlert';

const icon = <IconAlert width="40px" height="40px" />;
// Block style is required since images are inline by default. This could be resolved by someones normalize.css
const image = <img style={{ display: 'block' }} height="40px" width="40px" src="https://github.com/cerner/terra-core/raw/master/terra.png" alt="a happy panda" />;
const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const simpleText = <div>{ipsum}</div>;
const textWithPadding = <div style={{ paddingLeft: '10px', paddingRight: '10px', border: '1px solid red' }}>{ipsum}</div>;

const alignExampleDiv = (
  <div
    style={{
      backgroundColor: '#000',
      display: 'block',
      height: '20px',
      margin: '1px',
      width: '40px',
    }}
  />
);

const ArrangeWrapper = props => (
  <div style={{ width: '500px', height: '50px', border: '1px solid black' }}>
    {props.children}
  </div>
);

ArrangeWrapper.propTypes = {
  children: PropTypes.element,
};

const IconWrapper = props => (
  <div style={{ backgroundColor: '#ff5722', height: '100%' }}>
    {props.children}
  </div>
);

IconWrapper.propTypes = {
  children: PropTypes.element,
};

const alignLabels = {
  overall: 'Overall Alignment: ',
  alignFitStart: 'Fit Start Alignment: ',
  alignFitEnd: 'Fit End Alignment: ',
  alignFill: 'Fill Alignment: ',
};

const alignOptions = [
  'center',
  'bottom',
  'stretch',
];

export {
  alignExampleDiv,
  icon,
  image,
  simpleText,
  textWithPadding,
  ArrangeWrapper,
  IconWrapper,
  alignLabels,
  alignOptions,
};
