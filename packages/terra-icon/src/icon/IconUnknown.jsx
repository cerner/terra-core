/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24C48 10.8 37.3 0 24.1 0H24z" ></path><path fill="#FFF" d="M26 36h-4v-4h4v4zm4.6-12.8c-.6.7-1.4 1.4-2.2 1.9-1.2.8-2.4 1-2.4 1.8V28h-4v-.8c0-1.8.9-3.5 2.4-4.5.6-.3 1.1-.6 1.6-.9 1.6-.8 2.2-2.7 1.4-4.3-.6-1.1-1.7-1.7-2.9-1.7H24c-1.6 0-3 1.3-3.2 2.9v.3h-4c-.1-3.1 2.1-5.9 5.1-6.6.9-.3 1.9-.4 2.8-.4h.2c3.8-.2 7 2.8 7.2 6.6.1 1.7-.5 3.3-1.5 4.6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconUnknown";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */