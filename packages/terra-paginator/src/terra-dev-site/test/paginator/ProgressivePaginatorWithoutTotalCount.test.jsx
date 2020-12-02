import React from 'react';
import ProgressivePaginator from '../../../ProgressivePaginator';

const ProgressivePaginatorWithoutTotalCount = () => (
  // eslint-disable-next-line no-console
  <ProgressivePaginator onPageChange={i => console.log(i)} />
);

export default ProgressivePaginatorWithoutTotalCount;
