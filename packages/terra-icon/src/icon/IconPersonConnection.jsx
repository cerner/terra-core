/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M28.122 29.025c.585 0 1.161.074 1.717.215-1.588-5.411-6.577-9.369-12.503-9.38h-4.33C5.802 19.881-.021 25.739 0 32.943v5.052h21.259c-.087-.44-.135-1.507-.135-1.973 0-3.858 3.14-6.997 6.998-6.997zM15.187 17.601a8.801 8.801 0 000-17.601 8.839 8.839 0 00-8.8 8.801 8.799 8.799 0 008.8 8.8zm29.29 21.355a3.985 3.985 0 00-3.621 1.52l-8.918-3.861c.031-.202.062-.404.062-.615 0-.142-.027-.276-.042-.414l8.779-3.284a3.978 3.978 0 002.785 1.683 4 4 0 10-3.494-4.449c-.037.305-.03.603 0 .896l-8.757 3.277A3.988 3.988 0 0028 32a4 4 0 000 8 3.977 3.977 0 003.141-1.55l8.919 3.862c-.007.047-.025.091-.031.139a4 4 0 104.448-3.495z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPersonConnection";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
