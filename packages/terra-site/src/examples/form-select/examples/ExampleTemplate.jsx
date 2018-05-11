import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ExampleTemplate.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const ExampleTemplate = ({ children, description, title }) => (
  <div className={cx('template')}>
    <div className={cx('title')}>{title}</div>
    <p className={cx('description')}>{description}</p>
    <div>
      {children}
    </div>
  </div>
);

ExampleTemplate.propTypes = propTypes;

export default ExampleTemplate;
