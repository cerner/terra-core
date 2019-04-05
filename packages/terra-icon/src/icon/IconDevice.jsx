/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M37 0H11C9.9 0 9 .9 9 2v44c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM21 3.9c0-.5.4-.9.9-.9H26c.6 0 1 .4 1 .9V4c0 .6-.4 1-.9 1H22c-.6 0-1-.4-1-.9v-.2zM24 45c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm12-7H12V8h24v30z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDevice";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
