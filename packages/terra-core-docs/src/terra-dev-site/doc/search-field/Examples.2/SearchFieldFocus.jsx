import React, { useRef } from 'react';
import SearchField from 'terra-search-field';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './SearchFieldFocus.module.scss';

const cx = classNames.bind(styles);

const SearchFieldFocus = () => {
  const searchElement = useRef(null);

  const handleButtonClick = () => {
    if (searchElement) {
      searchElement.current.focus();
    }
  };

  return (
    <div>
      <Button text="Focus Me" onClick={handleButtonClick} className={cx('search-field-focus-button')} id="search-field-focus-button" />
      <SearchField
        isLabelVisible
        groupName="Find a clinic"
        inputRefCallback={(inputRef) => { searchElement.current = inputRef; }}
      />
    </div>
  );
};

export default SearchFieldFocus;
