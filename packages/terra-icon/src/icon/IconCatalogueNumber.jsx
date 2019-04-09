/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M45 12v24H3V12h42m3-3H0v30h48V9zM6.713 16.689c1.101-.18 2.74-.314 4.56-.314 2.246 0 3.818.336 4.896 1.189.898.719 1.393 1.775 1.393 3.168 0 1.932-1.37 3.256-2.673 3.729v.066c1.056.428 1.64 1.438 2.021 2.83.472 1.707.943 3.684 1.235 4.268h-3.504c-.247-.426-.606-1.662-1.056-3.525-.404-1.887-1.056-2.404-2.448-2.426h-1.033v5.951H6.713V16.689zm3.392 6.514h1.348c1.707 0 2.718-.854 2.718-2.18 0-1.393-.943-2.088-2.516-2.111-.831 0-1.303.068-1.55.113v4.178zm18.937 2.022h-5.57v3.594h6.222v2.807h-9.658v-15.14h9.344v2.809h-5.907v3.145h5.57v2.785zm2.991-8.739h9.254v2.809H35.47v3.459h4.341v2.785H35.47v6.086h-3.437V16.486z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCatalogueNumber";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
