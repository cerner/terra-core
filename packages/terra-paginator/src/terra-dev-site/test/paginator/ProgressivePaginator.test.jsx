import React from 'react';
import ProgressivePaginator from '../../../ProgressivePaginator';

const ProgressivePaginatorExample = () => (
  // eslint-disable-next-line no-console
  <ProgressivePaginator onPageChange={(i) => console.log(i)} selectedPage={1} totalCount={2234} itemCountPerPage={20} />
);

export default ProgressivePaginatorExample;
