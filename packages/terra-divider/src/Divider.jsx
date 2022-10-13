import React from 'react';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import PropTypes from 'prop-types';
import styles from './Divider.module.scss';

const propTypes = {
  /**
   * String to be displayed inline with the divider.
   * A level should also be used whenever using the text.
   */
  text: PropTypes.string,
};

const cx = classNamesBind.bind(styles);

const Divider = (props) => {
  const { text, ...customProps } = props;

  const theme = React.useContext(ThemeContext);

  const dividerClassNames = classNames(
    cx([
      { divider: !text },
      { 'divider-container': text },
      theme.className,
    ]),
    customProps.className,
  );

  if (!text) {
    return <hr {...customProps} className={dividerClassNames} aria-hidden="true" />;
  }

  return (
    <div {...customProps} className={dividerClassNames}>
      <span className={cx(['divider-text'])}>{text}</span>
    </div>
  );
};

Divider.propTypes = propTypes;
export default Divider;
