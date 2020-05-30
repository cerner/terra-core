import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './_Tag.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The content of the tag.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function triggered when the tag is deselected.
   */
  onDeselect: PropTypes.func.isRequired,
  /**
   * The value of the tag.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

/* eslint-disable jsx-a11y/no-static-element-interactions */
const Tag = ({ children, onDeselect, value }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <li className={cx('tag', theme.className)}>
      <span className={cx('display')}>
        {children}
      </span>
      <span className={cx('deselect')} onClick={() => { onDeselect(value); }} role="presentation">
        <span className={cx('icon')} />
      </span>
    </li>
  );
};

Tag.propTypes = propTypes;

export default Tag;
