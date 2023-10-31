import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { FormattedMessage } from 'react-intl';
import styles from './_NoResults.module.scss';

const cx = classNamesBind.bind(styles);

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

const NoResults = ({ noResultContent, value }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div role="option" className={cx('no-results', theme.className)} aria-selected="false">
      {noResultContent || <FormattedMessage id="Terra.form.select.noResults" values={{ text: value }} />}
    </div>
  );
};

NoResults.propTypes = propTypes;

export default NoResults;
