import React, { useState } from 'react';
import SearchField from 'terra-search-field';
import classNames from 'classnames/bind';
import styles from './SearchFieldInvalid.module.scss';

const cx = classNames.bind(styles);

const INVALID_MESSAGE = 'The default minimum search length is 5.';

const SearchFieldMinimumLength = () => {
  const [searchText, setSearchText] = useState('');

  const message = searchText.length >= 5 ? `Search text: ${searchText}` : INVALID_MESSAGE;

  return (
    <div>
      <p>{message}</p>
      <SearchField minimumSearchTextLength={5} inputAttributes={{ 'aria-label': message }} onSearch={setSearchText} onInvalidSearch={setSearchText} isLabelVisible groupName="Find a clinic" />
      {(searchText.length > 0 && searchText.length < 5) && (
      <div id="search-callback-text" className={cx('error-text')}>
        INVALID Search Text:
        {' '}
        {searchText}
      </div>
      )}
    </div>
  );
};

export default SearchFieldMinimumLength;
