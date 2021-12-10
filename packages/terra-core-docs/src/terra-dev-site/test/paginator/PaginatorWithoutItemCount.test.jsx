import React from 'react';
import Paginator from 'terra-paginator';

const PaginatorWithoutItemCountExample = () => (
  // eslint-disable-next-line no-console
  <Paginator onPageChange={i => console.log(i)} selectedPage={1} totalCount={224} />
);

export default PaginatorWithoutItemCountExample;
