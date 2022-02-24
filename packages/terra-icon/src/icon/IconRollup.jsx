/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconBase from '../IconBase';
import styles from '../IconRollup.module.scss';

const cx = classNamesBind.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const theme = React.useContext(ThemeContext);
  const iconClassNames = classNames(
    cx(
      'IconRollup',
      theme.className,
    ),
    customProps.className,
  );

  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M18.6 24c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4c-3 0-5.4-2.4-5.4-5.4zm0-18.6C18.6 2.4 21 0 24 0c3 0 5.4 2.4 5.4 5.4 0 3-2.4 5.4-5.4 5.4-3 0-5.4-2.4-5.4-5.4zm0 37.2c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4c0 3-2.4 5.4-5.4 5.4-3 0-5.4-2.4-5.4-5.4z"/></svg>`;
  return (
    <IconBase {...attributes} svgSource={svgString} > </IconBase>
  );
};

SvgIcon.displayName = "IconRollup";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
