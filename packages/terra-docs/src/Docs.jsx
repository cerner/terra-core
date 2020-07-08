import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Docs.module.scss';

const cx = classNames.bind(styles);

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
  const DocsClassNames = cx([
    'docs',
    customProps.className,
  ]);

  return (<div {...customProps} className={DocsClassNames}>{name}</div>);
};

Docs.propTypes = propTypes;
Docs.defaultProps = defaultProps;

export default Docs;
