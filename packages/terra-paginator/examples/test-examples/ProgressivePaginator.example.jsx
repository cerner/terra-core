import React from 'react';
import ProgressivePaginator from '../../lib/ProgressivePaginator';

const ProgressivePaginatorExample = () => (
  // eslint-disable-next-line no-console
  <ProgressivePaginator onPageChange={(e, i) => console.log(i)} selectedPage={1} totalCount={2234} itemCountPerPage={20} />
);

export default ProgressivePaginatorExample;
