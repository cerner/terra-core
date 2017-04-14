import React, { PropTypes } from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import IconSuccessInverse from 'terra-icon/lib/icon/IconSuccessInverse';

// Block style is required since images are inline by default. This could be resolved by someones normalize.css
const image = <img style={{ display: 'block' }} height="100" width="150" src="http://3w6kx9401skz1bup4i1gs9ne.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/telegraph-1.jpg" alt="a happy panda" />;
const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const simpleText = <div>{ipsum}</div>;

const ArrangeWrapper = props => (
  <div style={{ width: '500px', border: '1px solid black', marginBottom: '10px', backgroundColor: '#dedede' }}>
    {props.children}
  </div>
);

ArrangeWrapper.propTypes = {
  children: PropTypes.element,
};

const IconWrapper = () => (
  <div style={{ backgroundColor: '#ff5722', height: '100%' }}>
    <IconSuccessInverse style={{ fontSize: '4em' }} />
  </div>
);

IconWrapper.propTypes = {
  children: PropTypes.element,
};

export {
  image,
  simpleText,
  ArrangeWrapper,
  IconWrapper,
};
