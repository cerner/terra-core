import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Placeholder.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The placeholder text to be displayed.
   */
  title: PropTypes.string,
};

const defaultProps = {
  title: '',
};

const Placeholder = ({
  title,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const placeholderClassNames = classNames(
    cx([
      'placeholder',
      theme.className,
    ]),
    customProps.className,
  );

  const innerClassNames = cx([
    'inner',
  ]);

  return (
    <div {...customProps} className={placeholderClassNames}>
      <div className={innerClassNames}>
        <p className={cx('title')}>{title}</p>
      </div>
    </div>
  );
};

Placeholder.propTypes = propTypes;
Placeholder.defaultProps = defaultProps;

export default Placeholder;
