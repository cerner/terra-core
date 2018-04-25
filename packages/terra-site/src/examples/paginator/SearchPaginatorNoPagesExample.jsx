import React from 'react';
import Paginator from 'terra-paginator/src/Paginator';

const SearchPaginatorNoPagesExample = () => (
  // eslint-disable-next-line no-console
  <Paginator onPageChange={(e, i) => console.log(i)} />
);

export default SearchPaginatorNoPagesExample;
