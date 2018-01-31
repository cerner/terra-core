/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './site.scss';

const TestContainer = ({ children }) => (
  <div className={styles.app} style={{ overflow: 'auto' }}>
    <div id="wdio-test-wrapper">
      {children}
    </div>
  </div>
);

TestContainer.propTypes = {
  /**
   * The children to be placed within the main content area of the test container.
   */
  children: PropTypes.node,
};

TestContainer.defaultProps = {
  children: undefined,
};

export default TestContainer;
