import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './_NoResults.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * The filter value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

const NoResults = ({ noResultContent, value }, context) => (
  <div className={cx('no-results')}>
    {noResultContent || context.intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: value })}
  </div>
);

NoResults.propTypes = propTypes;
NoResults.contextTypes = contextTypes;

export default NoResults;
