import React, { useState } from 'react';
import Button from 'terra-button';
import ProgressivePaginator from '../../../ProgressivePaginator';

const ProgressivePaginatorWithCustomLabel = () => {
  const [totalCount, setTotalCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const changePages = (index) => {
    setCurrentPage(index);
  };
  return (
    <div>
      <Button id="total-count-button" text="Set Total Count to 45" onClick={() => { setTotalCount(45); }} />
      {/* eslint-disable-next-line no-console */}
      <ProgressivePaginator pageLabel="WebPage" totalCount={totalCount} onPageChange={changePages} selectedPage={currentPage} />
    </div>
  );
};

export default ProgressivePaginatorWithCustomLabel;
