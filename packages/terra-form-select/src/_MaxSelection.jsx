import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import styles from './_MaxSelection.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The intl object containing translations. This is retrieved from the context automatically by injectIntl.
   */
  intl: intlShape.isRequired,
  /**
   * The filter value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const MaxSelection = ({ intl, value }) => (
  <div className={cx('max-selection')}>
    {intl.formatMessage({ id: 'Terra.form.select.maxSelectionOption' }, { text: value })}
  </div>
);

MaxSelection.propTypes = propTypes;

export default injectIntl(MaxSelection);
