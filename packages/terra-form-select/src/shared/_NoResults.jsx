import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FormattedMessage } from 'react-intl';
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

const NoResults = ({ noResultContent, value }) => (
  <div role="option" className={cx('no-results')} aria-selected="false">
    {noResultContent || <FormattedMessage id="Terra.form.select.noResults" values={{ text: value }} />}
  </div>
);

NoResults.propTypes = propTypes;

export default NoResults;
