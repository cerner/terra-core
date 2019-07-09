import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import styles from './_NoResults.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * Content to display when no results are found.
   */
  noResultContent: PropTypes.node,
  /**
   * The filter value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const NoResults = ({ intl, noResultContent, value }) => (
  <div className={cx('no-results')}>
    {noResultContent || intl.formatMessage({ id: 'Terra.form.select.noResults' }, { text: value })}
  </div>
);

NoResults.propTypes = propTypes;

export default injectIntl(NoResults);
