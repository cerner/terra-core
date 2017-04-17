import React, { PropTypes } from 'react';

// Block style is required since images are inline by default. This could be resolved by someones normalize.css
const image = <img style={{ display: 'block' }} height="100" width="150" src="http://3w6kx9401skz1bup4i1gs9ne.wpengine.netdna-cdn.com/wp-content/uploads/2016/09/telegraph-1.jpg" alt="a happy panda" />;
const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const simpleText = <div>{ipsum}</div>;
const longText = <div>{ipsum} {ipsum} {ipsum} {ipsum}</div>;

const ArrangeWrapper = props => (
  <div style={{ width: '500px', border: '1px solid black', marginBottom: '10px', backgroundColor: '#dedede' }}>
    {props.children}
  </div>
);

ArrangeWrapper.propTypes = {
  children: PropTypes.element,
};

const IconWrapper = () => (
  <div style={{ backgroundColor: '#ff5722' }}>
    <svg className="terra-Icon" height="4em" width="4em" viewBox="0 0 48 48">
      <path d="M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z" fill="#FFF" />
    </svg>
  </div>
);

IconWrapper.propTypes = {
  children: PropTypes.element,
};

export {
  image,
  simpleText,
  longText,
  ArrangeWrapper,
  IconWrapper,
};
