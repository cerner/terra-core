import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ExampleTemplate.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ExampleTemplate = ({ children }) => (
  <div className={cx('content-wrapper')}>
    {children}
  </div>
);

ExampleTemplate.propTypes = propTypes;

export default ExampleTemplate;
