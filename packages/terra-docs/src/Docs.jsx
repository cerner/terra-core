import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './Docs.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const Docs = ({ name, ...customProps }) => {
  const theme = React.useContext(ThemeContext);
  const DocsClassNames = classNames(
    cx([
      'docs',
      theme.className,
    ]),
    customProps.className,
  );

  return (<div {...customProps} className={DocsClassNames}>{name}</div>);
};

Docs.propTypes = propTypes;
Docs.defaultProps = defaultProps;

export default Docs;
