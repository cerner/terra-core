/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';
import styles from './site.scss';

const TestContainer = ({ children }) => (
  <div id="wdio-test-wrapper" className={styles.app} style={{ overflow: 'auto' }}>      
    {children}
  </div>
);

export default TestContainer;
