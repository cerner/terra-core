import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './_MaxSelection.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The filter value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const MaxSelection = ({ value }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div className={cx('max-selection', theme.className)}>
      <FormattedMessage id="Terra.form.select.maxSelectionOption" values={{ text: value }} />
    </div>
  );
};

MaxSelection.propTypes = propTypes;

export default MaxSelection;
