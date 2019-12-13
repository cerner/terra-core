/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#FFF" d="M33.7 41.6C27 46.9 17.4 45.9 12 39.2c0-.1-.1-.1-.1-.2-4.6-5.8-4.6-13.9 0-19.7 5.7-6.8 9.7-11.7 12-14.5 2.3 2.8 6.4 7.8 12.2 14.7 5.4 6.8 4.3 16.6-2.4 22.1z" ></path><path d="M38.4 17.6C28.7 5.9 23.9 0 23.9 0S19.1 5.9 9.5 17.5c-5.4 6.9-5.4 16.5 0 23.4 6.3 8 17.8 9.4 25.8 3.2.1 0 .1-.1.2-.2 8-6.5 9.3-18.2 2.9-26.3zM12 39.2c0-.1-.1-.1-.1-.2-4.6-5.8-4.6-13.9 0-19.7 5.7-6.8 9.7-11.7 12-14.5 2.3 2.8 6.4 7.8 12.2 14.7 5.4 6.8 4.3 16.6-2.4 22.1-6.7 5.3-16.3 4.3-21.7-2.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTeardropSymbolLight";
SvgIcon.defaultProps = {"height":"48","width":"48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
