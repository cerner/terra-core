import React from 'react';
import Paginator from 'terra-paginator/lib/Paginator';

const SearchPaginatorNoPagesExample = () => (
  // eslint-disable-next-line no-console
  <Paginator onPageChange={i => console.log(i)} />
);

export default SearchPaginatorNoPagesExample;
