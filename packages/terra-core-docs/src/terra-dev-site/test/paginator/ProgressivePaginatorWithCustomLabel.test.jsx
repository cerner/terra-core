import React, { useState } from 'react';
import Button from 'terra-button';
import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';

const ProgressivePaginatorWithCustomLabel = () => {
  const [totalCount, setTotalCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [hidePageCount, setHidePageCount] = useState(false);
  const [pageLabel, setPageLabel] = useState('WebPage');

  const changePages = (index) => {
    setCurrentPage(index);
  };
  return (
    <div>
      <Button id="total-count-button" text="Set Total Count to 45" onClick={() => { setTotalCount(45); }} />
      <Button id="hide-count-button" text="Hide Page Count" onClick={() => { setHidePageCount(true); setPageLabel('WebPage 444 of 445'); }} />
      <Button id="clear-page-lable-button" text="clear Page label" onClick={() => { setPageLabel(undefined); }} />
      <ProgressivePaginator pageLabel={pageLabel} hidePageCount={hidePageCount} totalCount={totalCount} onPageChange={changePages} selectedPage={currentPage} />
    </div>
  );
};

export default ProgressivePaginatorWithCustomLabel;
