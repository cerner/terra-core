/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M17.143 0c.614 0 1.219.035 1.816.098v5.204a11.95 11.95 0 00-1.816-.153C10.53 5.15 5.15 10.53 5.15 17.143c0 6.613 5.38 11.993 11.993 11.993.619 0 1.222-.062 1.816-.153v5.204a17.3 17.3 0 01-1.816.098C7.675 34.286 0 26.611 0 17.143S7.675 0 17.143 0zm29.041 5.15c.619 0 1.222.062 1.816.153V.098A17.3 17.3 0 0046.184 0c-9.468 0-17.143 7.675-17.143 17.143s7.675 17.143 17.143 17.143c.614 0 1.219-.035 1.816-.098v-5.204a11.95 11.95 0 01-1.816.153c-5.737 0-10.54-4.051-11.713-9.442h10.106v-5.073H34.463c1.162-5.406 5.973-9.472 11.721-9.472z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCeMarking";
SvgIcon.defaultProps = {"viewBox":"0 0 48 34.286","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
