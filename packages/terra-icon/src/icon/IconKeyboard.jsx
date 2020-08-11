/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M44.149 34H3.851A2.852 2.852 0 011 31.149v-18.3A2.852 2.852 0 013.851 10h40.3A2.852 2.852 0 0147 12.851v18.3A2.852 2.852 0 0144.149 34zM8 13H4v4h4zm3 7H4v4h7zm-1 7H4v4h6zm34-14h-4v4h4zm0 7h-7v4h7zm0 7h-6v4h6zM14 13h-4v4h4zm24 0h-4v4h4zm-3 7h-4v4h4zm-15-7h-4v4h4zm-3 7h-4v4h4zm19 7H12v4h24zm-4-14h-4v4h4zm-3 7h-4v4h4zm-3-7h-4v4h4zm-3 7h-4v4h4z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconKeyboard";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 3"};

export default SvgIcon;
/* eslint-enable */
