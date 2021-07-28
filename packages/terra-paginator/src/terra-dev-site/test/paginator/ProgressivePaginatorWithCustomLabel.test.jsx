import React, { useState } from 'react';
import Button from 'terra-button';
import ProgressivePaginator from '../../../ProgressivePaginator';

const ProgressivePaginatorWithCustomLabel = () => {
  const [totalCount, setTotalCount] = useState();
  return (
    <div>
      <Button id="total-count-button" text="Set Total Count to 45" onClick={() => { setTotalCount(45); }} />
      {/* eslint-disable-next-line no-console */}
      <ProgressivePaginator pageLabel="Custom_Page_Label" totalCount={totalCount} onPageChange={i => console.log(i)} />
    </div>
  );
};

export default ProgressivePaginatorWithCustomLabel;
