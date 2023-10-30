import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './_SearchResults.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to display when search results are found.
   */
  searchResultContent: PropTypes.node,
};

const SearchResults = ({ searchResultContent }) => {
  const theme = React.useContext(ThemeContext);
  return (
    <div role="option" className={cx('search-results', theme.className)} aria-selected="false">
      {searchResultContent }
    </div>
  );
};

SearchResults.propTypes = propTypes;

export default SearchResults;
