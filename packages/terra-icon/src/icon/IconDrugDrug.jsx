/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path fill="#FFC20B" d="M36 28.5L25.3 47h21.4L36 28.5zM37 46h-2v-2h2v2zm-2-4v-9h2v9h-2z" ></path><path d="M47.9 47.1L36.5 27.4c-.1-.3-.3-.4-.5-.4s-.4.1-.5.4L24.1 47.1c-.3.5 0 .9.5.9h22.8c.5 0 .8-.4.5-.9zM25.3 47L36 28.5 46.7 47H25.3zm9.7-3h2v2h-2v-2zm2-11v9h-2v-9h2z" ></path><path d="M34.5 2.4C32.8.8 30.7 0 28.5 0s-4.4.8-6 2.5l-20 20c-3.3 3.3-3.3 8.7.1 12 1.7 1.6 3.8 2.4 6 2.4s4.4-.8 6-2.5l20-20c3.2-3.3 3.2-8.7-.1-12zm-1.6 10.4l-10 10-8.8-8.7 10-10c1.2-1.2 2.7-1.8 4.4-1.8 1.6 0 3.2.6 4.3 1.8 1.2 1.2 1.8 2.7 1.8 4.3.1 1.7-.5 3.2-1.7 4.4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconDrugDrug";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
