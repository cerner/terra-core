/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M21 46.136a22.5 22.5 0 010-44.593z"/><path d="M19.5 3.328v41.023a21 21 0 010-41.023m3-3.437a24 24 0 000 47.9v-47.9z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconMedicationTabletHalf";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg","data-name":"Layer 2"};

export default SvgIcon;

/* eslint-enable */
