import React from 'react';
import IconBase from '../IconBase';
import classNames from 'classnames';

const SvgIcon = customProps => {
  const attributes = Object.assign({}, customProps);
  attributes.className = classNames("is-themeable", attributes.className);

  return (
    <IconBase {...attributes}>
      <path d="M43.9 40.6c-.5 0-.9.1-1.3.2l-8.5-8.5c1.5-1.9 2.6-4.2 2.8-6.8h2l.3.3c1 1 2.6 1 3.7 0s1-2.6 0-3.7-2.6-1-3.7 0l-.3.3h-2c-.3-2.6-1.3-4.8-2.8-6.8l2.3-2.3c.6.3 1.3.5 2 .5 2.6 0 4.6-2.1 4.6-4.6s-2.1-4.6-4.6-4.6c-2.6 0-4.6 2.1-4.6 4.6 0 .7.2 1.4.5 2L32 13.4c-1.9-1.5-4.2-2.6-6.8-2.8V4.7l.3-.3c1-1 1-2.6 0-3.7s-2.6-1-3.7 0-1 2.6 0 3.7l.3.3v5.9c-2.6.3-4.8 1.3-6.8 2.8L7.2 5.2c.2-.4.2-.8.2-1.3 0-2-1.6-3.7-3.7-3.7S.1 2 .1 4s1.6 3.7 3.7 3.7c.5 0 .9-.1 1.3-.2l8.5 8.5c-1.5 1.9-2.6 4.2-2.8 6.8H9c-.6-1.8-2.3-3.2-4.3-3.2C2.2 19.4.2 21.5.2 24s2.1 4.6 4.6 4.6c2 0 3.8-1.3 4.3-3.2h1.6c.3 2.6 1.3 4.8 2.8 6.8l-5 5h-.4c-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6v-.4l5-5c1.9 1.5 4.2 2.6 6.8 2.8v1.6c-1.8.6-3.2 2.3-3.2 4.3 0 2.6 2.1 4.6 4.6 4.6s4.6-2.1 4.6-4.6c0-2-1.3-3.8-3.2-4.3v-1.6c2.6-.3 4.8-1.3 6.8-2.8l8.5 8.5c-.2.4-.2.8-.2 1.3 0 2 1.6 3.7 3.7 3.7s3.7-1.6 3.7-3.7c.1-1.9-1.8-3.6-3.9-3.6z" ></path>
    </IconBase>
  )
};

SvgIcon.displayName = "IconAllergy";
SvgIcon.defaultProps = {"className":"is-themeable","viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
