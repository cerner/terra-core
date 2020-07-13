import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ThemeContext } from 'terra-theme-context';

import styles from './Notice.module.scss';

const cx = classNames.bind(styles);

const getTitle = (variant) => {
  if (variant === 'deprecation') {
    return 'Deprecation Notice';
  }

  return 'error';
};

const propTypes = {
  children: PropTypes.string,
  variant: PropTypes.oneOf(['deprecation']),
};

const MenuButton = ({
  variant,
  children,
}) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className={cx('notice', variant, theme.className)}>
      <h2>
        {getTitle()}
      </h2>
      <p>
        {children}
      </p>
    </div>
  );
};

MenuButton.propTypes = propTypes;

export default MenuButton;
