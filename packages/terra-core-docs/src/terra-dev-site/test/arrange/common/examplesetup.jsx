import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import styles from './examplesetuptest.scss';

const cx = classNames.bind(styles);

const icon = <IconAlert width="4em" height="4em" a11yLabel="Alert" />;
const ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const longWord = 'Thisisareallyreallylongwordthathasnospacesthatwillneedtobebrokeninordertohavethetextwrapandnotoverlowintothenextelement';
const simpleText = <div>{ipsum}</div>;
const longText = (
  <div>
    {ipsum}
    {' '}
    {ipsum}
    {' '}
    {ipsum}
    {' '}
    {ipsum}
  </div>
);
const longWordText = <div>{longWord}</div>;

const ArrangeWrapper = props => (
  <div className={cx('arrange-wrapper')}>
    {props.children}
  </div>
);

ArrangeWrapper.propTypes = {
  children: PropTypes.element,
};

const IconWrapper = () => (
  <div className={cx('icon-wrapper')}>
    <svg className="terra-Icon" height="4em" width="4em" viewBox="0 0 48 48">
      <path d="M24 0h-.1C10.7 0 0 10.8 0 24c0 13.3 10.7 24 24 24s24-10.7 24-24S37.3 0 24 0zm-4 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z" fill="#FFF" />
    </svg>
  </div>
);

export {
  icon,
  simpleText,
  longText,
  ArrangeWrapper,
  IconWrapper,
  longWordText,
};
