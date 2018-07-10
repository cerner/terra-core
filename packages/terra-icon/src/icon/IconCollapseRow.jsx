/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M38 19v3H10v-3h28zM10 29v-3h28v3H10zM25.5 0h-3v9h-6l7.5 7.5L31.5 9h-6V0zm-3 39v9h3v-9h6L24 31.5 16.5 39h6z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconCollapseRow";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
