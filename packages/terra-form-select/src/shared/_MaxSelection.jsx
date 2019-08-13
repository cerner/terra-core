import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames/bind';
import styles from './_MaxSelection.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The filter value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const MaxSelection = ({ value }) => (
  <div className={cx('max-selection')}>
    <FormattedMessage id="Terra.form.select.maxSelectionOption" values={{ text: value }} />
  </div>
);

MaxSelection.propTypes = propTypes;

export default MaxSelection;
