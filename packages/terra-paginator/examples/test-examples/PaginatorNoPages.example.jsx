import React from 'react';
import Paginator from '../../lib/Paginator';

const PaginatorNoPagesExample = () => (
  <Paginator onPageChange={(e, i) => console.log(i)} />
);

export default PaginatorNoPagesExample;
