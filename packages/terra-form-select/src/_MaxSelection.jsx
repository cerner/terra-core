import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './_MaxSelection.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
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

const MaxSelection = ({ value }, context) => (
  <div className={cx('max-selection')}>
    { context.intl.formatMessage({ id: 'Terra.form.select.maxSelectionOption' }, { text: value })}
  </div>
);

MaxSelection.propTypes = propTypes;
MaxSelection.contextTypes = contextTypes;

export default MaxSelection;
