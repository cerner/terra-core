import React from 'react';
import Paginator from 'terra-paginator/src/Paginator';

const SearchPaginatorNoPagesExample = () => (
  <Paginator onPageChange={(e, i) => console.log(i)} />
);

export default SearchPaginatorNoPagesExample;
