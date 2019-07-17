/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M.471 3.867a1.622 1.622 0 010-2.286L1.582.471a1.622 1.622 0 012.286 0L15.87 12.477H9.079L.471 3.867zM29 22v6.5h1.089c.104 1.81.715 3.554 1.785 5.164a11.938 11.938 0 01-5.884 1.546h-6.398c-6.633 0-12.01-5.377-12.01-12.01v-8.002H38V22h-9zm-1.406.966h-3.202v-3.202H21.19v3.202h-3.202v3.202h3.202v3.202h3.202v-3.202h3.202v-3.202z" ></path><path d="M48 24H31v2.5h1.073v1.438c0 4.197 3.279 7.03 5.599 8.515-1.874 1.07-5.599 3.691-5.599 7.608V45.5H31V48h17v-2.5h-1.073v-1.439c0-3.918-3.728-6.54-5.596-7.606 2.287-1.461 5.596-4.301 5.596-8.517V26.5H48V24zm-2.822 20.061v.375C43.487 43.524 41.556 43 39.5 43s-3.987.524-5.678 1.436v-.375c0-3.522 4.395-5.942 5.283-6.396l.394-.206.403.21c.881.449 5.276 2.869 5.276 6.392zm-.941-12.836a11.868 11.868 0 01-4.737 1.004c-1.685 0-3.277-.368-4.731-.996-.569-.963-.947-2.061-.947-3.294v-1.438h11.354v1.438c.002 1.23-.374 2.326-.939 3.286z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconPharmacyVerification";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
