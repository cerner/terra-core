/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = classNames(
    customProps.className,
  );

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#F94E4E" d="M24.6 48c-.5 0-.8-.4-.5-.9l11.4-19.8c.3-.5.7-.5 1 0l11.4 19.8c.3.5 0 .9-.5.9H24.6z"/><path fill="#B1B5B6" d="M35 44h2v2h-2v-2zm0-11v9h2v-9h-2z"/><path fill="#6F7476" d="M30 0H6v33h10v4.3l14-4.6V0zM19.5 20.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5c-.1.8-.7 1.5-1.5 1.5zM16 30H9V3h11.9L16 4.6V30z"/></svg>`;
  return (
    <IconBase {...attributes} encoding="utf8" svgSource={svgString} ></IconBase>
  );
};

SvgIcon.displayName = "IconDischargeOverDueLowLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
