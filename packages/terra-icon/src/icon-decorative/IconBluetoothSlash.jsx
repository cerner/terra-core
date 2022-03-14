/* eslint-disable */
import React from 'react';
import IconBaseDec from '../IconBaseDec';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBaseDec {...attributes}>
      <g data-name="48" ><path d="M25.154 18.79V9.366l5.81 5.447-5.302 4.485 2.838 2.838 8.476-7.169L21.154.133V14.79l4 4z" ></path><path d="M31.655 38.019l-2.83-2.83-3.671 3.442v-7.113l-6.387-6.387-7.78 6.581 2.584 3.055 7.583-6.416v19.516l10.501-9.848z" ></path><path d="M3.848 5.969l2.12-2.122 38.185 38.184-2.122 2.122z" ></path></g>
    </IconBaseDec>
  );
};

SvgIcon.displayName = "IconBluetoothSlashDec";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
