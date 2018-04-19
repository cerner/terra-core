/* eslint-disable no-alert */
import React from 'react';
import Paginator from 'terra-paginator/src/Paginator';

const SearchPaginatorExample = () => (
  <Paginator onPageChange={(e) => console.log(e.currentTarget.text)} selectedPage={1} totalCount={234} itemCountPerPage={20} />
);

export default SearchPaginatorExample;
/* eslint-enable no-alert */
