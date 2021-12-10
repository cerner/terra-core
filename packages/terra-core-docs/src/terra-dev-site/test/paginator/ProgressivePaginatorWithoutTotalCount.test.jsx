import React from 'react';
import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';

const ProgressivePaginatorWithoutTotalCount = () => (
  // eslint-disable-next-line no-console
  <ProgressivePaginator onPageChange={i => console.log(i)} />
);

export default ProgressivePaginatorWithoutTotalCount;
