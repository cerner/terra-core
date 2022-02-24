/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = classNames(
    customProps.className,
  );

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#B1B5B6" d="M24 0C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm2.7 36.8l-.2 1.7c-4.4 3-10.7 2.1-8.1-5.1 1-2.7 4.5-7.8 3.5-10.7-.4-1.2-1.8-1.2-3.2-.7l.2-1.6c2.4-1.7 5.4-2.6 7.6-1.2 3.9 2.5-1.7 11.7-2.4 13.5-1.4 3.8.3 4.7 2.6 4.1zM26.5 15c-1.9 0-3.5-1.6-3.5-3.5S24.6 8 26.5 8 30 9.6 30 11.5 28.4 15 26.5 15z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconInformationInverseLowLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
