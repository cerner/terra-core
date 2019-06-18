/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M44.4 37.1l-18.7 9.6c-1.1.6-2.5.6-3.6 0L1.8 36.2c-.6-.3-.8-1-.5-1.6.1-.2.3-.4.5-.5l6.4-3.2 12.5 6.5c2 1 4.4 1 6.4 0L39.6 31l4.9 2.6c1 .5 1.4 1.7.8 2.7-.2.3-.5.6-.9.8zm.1-15.5l-3.9-2-13.4 6.9c-2 1-4.4 1-6.4 0l-13.5-7-5.4 2.7c-.6.3-.8 1-.5 1.6.1.2.3.4.5.5l20.3 10.6c1.1.6 2.5.6 3.6 0l18.7-9.6c1-.5 1.4-1.7.9-2.7-.3-.5-.6-.8-.9-1zm-18.7 2.2l18.7-9.6c1-.5 1.4-1.7.9-2.7-.2-.4-.5-.7-.9-.9L26 .9c-1.1-.6-2.4-.6-3.6 0L1.8 11.1c-.6.3-.8 1-.5 1.6.1.2.3.4.5.5l20.3 10.6c1.2.5 2.5.5 3.7 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconExtensions";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
