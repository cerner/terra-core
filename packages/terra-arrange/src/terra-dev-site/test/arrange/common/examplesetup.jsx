import React from 'react';
import PropTypes from 'prop-types';
import IconAlert from 'terra-icon/lib/icon/IconAlert';

const icon = <IconAlert width="4em" height="4em" />;
// Block style is required since images are inline by default. This could be resolved by someones normalize.css
const image = <img style={{ display: 'block' }} height="75" width="75" src="https://github.com/cerner/terra-core/raw/master/terra.png" alt="a happy panda" />;
const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const longWord = 'Thisisareallyreallylongwordthathasnospacesthatwillneedtobebrokeninordertohavethetextwrapandnotoverlowintothenextelement';
const simpleText = <div>{ipsum}</div>;
const longText = (
  <div>
    {ipsum}
    {' '}
    {ipsum}
    {' '}
    {ipsum}
    {' '}
    {ipsum}
  </div>
);
const longWordText = <div>{longWord}</div>;

const ArrangeWrapper = props => (
  <div style={{
    width: '100%', border: '1px solid black', marginBottom: '10px', backgroundColor: '#dedede',
  }}
  >
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

export {
  icon,
  image,
  simpleText,
  longText,
  ArrangeWrapper,
  IconWrapper,
  longWordText,
};
