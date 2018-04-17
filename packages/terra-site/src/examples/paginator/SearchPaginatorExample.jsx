/* eslint-disable no-alert */
import React from 'react';
import Paginator from 'terra-paginator';

const SearchPaginatorExample = () => (
  <Paginator onPageChange={() => alert('Close')} />
);

export default SearchPaginatorExample;
/* eslint-enable no-alert */
