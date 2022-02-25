/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M19.5 3.5v41C8.2 42 1 30.8 3.5 19.5c1.7-8 8-14.3 16-16m3-3.4C9.3.9-.8 12.3.1 25.5c.8 12 10.4 21.6 22.4 22.4V.1zM28 3.4C37.6 5.5 45 14.2 45 24s-7.4 18.5-17 20.6V3.4M25 0v48c12.6-.8 23-11.2 23-24S37.6.8 25 0z"/></svg>`;
  return (
    <IconBase {...attributes} encoding="utf8" svgSource={svgString} ></IconBase>
  );
};

SvgIcon.displayName = "IconMedicationTabletOutline";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;

/* eslint-enable */
