import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './Notice.module.scss';

const cx = classNames.bind(styles);

const getTitle = (variant) => {
  if (variant === 'deprecation') {
    return 'Deprecation Notice';
  }

  if (variant === 'maintenance') {
    return 'Component in Maintenance';
  }

  return 'error';
};

const propTypes = {
  /**
  * The main body text of the notice.
  */
  children: PropTypes.string,
  /**
  * The type of notice.
  */
  variant: PropTypes.oneOf(['deprecation', 'maintenance']),
};

const defaultProps = {
  variant: 'deprecation',
};

const Notice = ({
  variant,
  children,
}) => {
  const theme = React.useContext(ThemeContext);
  return (
    <h2 className={cx('notice', variant, theme.className)}>
      {getTitle(variant)}
      <p className={cx('paragraph')}>
        {children}
      </p>
    </h2>
  );
};

Notice.propTypes = propTypes;
Notice.defaultProps = defaultProps;

export default Notice;
