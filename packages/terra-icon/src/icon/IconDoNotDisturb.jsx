/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBase from '../IconBase';
import styles from '../IconDoNotDisturb.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconDoNotDisturb',
      theme.className,
    ),
    customProps.className,
  );

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#E50000" d="M7 7c9.4-9.4 24.6-9.4 34 0s9.4 24.5 0 33.9-24.6 9.5-34 .1c-9.3-9.4-9.4-24.6 0-34z"/><path fill="#FFF" d="M10.2 34.3l24-24 3.5 3.5-24 24-3.5-3.5z"/></svg>`;
  return (
    <IconBase {...attributes} encoding="utf8" svgSource={svgString} ></IconBase>
  );
};

SvgIcon.displayName = "IconDoNotDisturb";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
