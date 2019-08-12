import React from 'react';
import Paginator from '../../../Paginator';

const PaginatorNoPagesExample = () => (
  // eslint-disable-next-line no-console
  <Paginator onPageChange={(i) => console.log(i)} />
);

export default PaginatorNoPagesExample;
