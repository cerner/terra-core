/* eslint-disable */
import React from 'react';
import classNames from 'classnames/bind';
import IconBase from '../IconBase';
import styles from '../IconFeaturedOutlineYellow.module.scss';

const cx = classNames.bind(styles);

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);
  const iconClassNames = cx([
    'IconFeaturedOutlineYellow',
    customProps.className,
  ]);

  return (
    <IconBase className={iconClassNames} {...attributes}>
      <path d="M.7 20.1c-.4-.4-.7-.9-.7-1.5 0-.7.5-1.2 1.6-1.4L16.1 15l6.5-13.8C22.9.4 23.4 0 24 0s1.1.4 1.4 1.2L31.9 15l14.5 2.2c1.1.2 1.6.6 1.6 1.4-.1.6-.3 1.1-.8 1.5L36.8 30.8l2.5 15.1v.6c0 .4-.1.8-.3 1.1-.2.3-.5.5-.9.4-.4 0-.8-.1-1.2-.4l-13-7.1L11 47.6c-.3.2-.7.3-1.2.4-.4 0-.7-.1-.9-.4-.2-.3-.3-.7-.3-1.1 0-.2 0-.4.1-.6l2.5-15.1L.7 20.1z" fill="#ffc20a" ></path><path d="M24 5.3l5.2 11 .7 1.4 1.6.2 11.9 1.8-8.7 8.9-1.1 1.1.2 1.5 2 12.4-10.4-5.7-1.4-.8-1.4.8-10.4 5.7 2-12.4.2-1.5-1.1-1.1-8.7-8.9L16.5 18l1.6-.2.7-1.4L24 5.3M24 0c-.6 0-1 .4-1.4 1.2L16.1 15 1.6 17.2c-1.1.2-1.6.7-1.6 1.4.1.6.3 1.1.7 1.5l10.5 10.7-2.5 15.1c0 .2-.1.4-.1.6 0 .4.1.8.3 1.1.3.3.6.4 1 .4s.8-.1 1.2-.4l13-7.1 13 7.1c.3.2.7.3 1.2.4.3 0 .7-.1.9-.4.2-.3.3-.7.3-1.1v-.6L37 30.8l10.5-10.7c.4-.4.7-.9.8-1.5 0-.7-.5-1.2-1.6-1.4L31.9 15 25.4 1.2C25 .4 24.6 0 24 0z" fill="#231f20" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconFeaturedOutlineYellow";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
