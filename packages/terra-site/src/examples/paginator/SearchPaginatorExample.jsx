import React from 'react';
import Paginator from 'terra-paginator/src/Paginator';

const SearchPaginatorExample = () => (
  // eslint-disable-next-line no-console
  <Paginator onPageChange={i => console.log(i)} selectedPage={1} totalCount={2234} itemCountPerPage={20} />
);

export default SearchPaginatorExample;
