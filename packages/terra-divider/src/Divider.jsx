import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import PropTypes from 'prop-types';
import styles from './Divider.module.scss';

const propTypes = {
  /**
  * String to be displayed inline with the divider.
  */
  text: PropTypes.string,
};

const cx = classNamesBind.bind(styles);

const Divider = (props) => {
  const { text, ...customProps } = props;

  const theme = React.useContext(ThemeContext);

  const dividerClassNames = classNames(
    cx([
      'divider',
      theme.className,
    ]),
    customProps.className,
  );

  if (!text) {
    return <hr {...customProps} className={dividerClassNames} aria-hidden="true" />;
  }
  return (
    <div className={cx(['divider-container', theme.className])}>
      <span className={cx(['divider-text'])}>{text}</span>
    </div>
  );
};

Divider.propTypes = propTypes;
export default Divider;
