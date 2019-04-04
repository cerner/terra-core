/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24.1 37.1c1-2.7 9.5-16.5 3.6-20.3-3.3-2.1-7.8-.8-11.3 1.7l-.2 2.4c2.1-.8 4.2-.8 4.8 1 1.5 4.4-3.7 12-5.2 16C11.9 48.8 21.3 50 28 45.6l.3-2.6c-3.7 1.1-6.3-.2-4.2-5.9zM27.8 0c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3-5.3-2.4-5.3-5.3S24.9 0 27.8 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconItalicI";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */