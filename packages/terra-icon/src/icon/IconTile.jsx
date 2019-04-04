/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M17 34.1h13.9V48H17zm-17 0h13.9V48H0zm34.1 0H48V48H34.1zM17 0h13.9v13.9H17zM0 0h13.9v13.9H0zm34.1 0H48v13.9H34.1zM17 17h13.9v13.9H17zM0 17h13.9v13.9H0zm34.1 0H48v13.9H34.1z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTile";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 1"};

export default SvgIcon;
/* eslint-enable */