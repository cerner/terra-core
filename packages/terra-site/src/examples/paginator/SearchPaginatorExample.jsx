/* eslint-disable no-alert */
import React from 'react';
import Paginator from 'terra-paginator/src/Paginator';

const SearchPaginatorExample = () => (
  <Paginator onPageChange={(e, i) => console.log(i)} selectedPage={1} totalCount={2234} itemCountPerPage={20} />
);

export default SearchPaginatorExample;
/* eslint-enable no-alert */
