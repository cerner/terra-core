/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M41 0H7v5h2.2v2.9c0 8.4 6.6 14.1 11.2 17C16.7 27 9.2 32.3 9.2 40.1V43H7v5h34v-5h-2.2v-2.9c0-7.9-7.5-13.1-11.2-15.2 4.6-2.9 11.2-8.6 11.2-17V5H41zm-6 40.1v.8A21.69 21.69 0 0 0 24 38a21.69 21.69 0 0 0-11 2.9v-.8c0-7.1 8.6-11.9 10.4-12.8l.7-.4.6.4C26.4 28.2 35 33 35 40.1zm.4-32.2a13.07 13.07 0 0 1-1.9 6.6 23.1 23.1 0 0 1-9.5 2 23.1 23.1 0 0 1-9.5-2 13.07 13.07 0 0 1-1.9-6.6V5h22.8z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPending";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */
