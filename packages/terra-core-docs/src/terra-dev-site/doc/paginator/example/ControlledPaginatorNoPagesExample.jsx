import React, { useState } from 'react';
import Dialog from 'terra-dialog';
import Button from 'terra-button';
import ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';
import classNames from 'classnames/bind';
import styles from './ControlledPaginatorCommon.module.scss';

const cx = classNames.bind(styles);

const buildPage = () => {
  const fullContent = [<p>This example used to  separating content into discrete pages without page preview.</p>,
    <p>selectedPage must be managed through the state of a parent component, and passed into this paginator through props.</p>];

  return (
    fullContent
  );
};

const ControlledPaginatorExample = () => {
  const content = buildPage();
  const [currentPage, setCurrentPage] = useState(1);

  const changePages = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className={cx('paginator-wrapper')}>
      <Dialog
        header={(
          <h1>
            Page
            {currentPage}
          </h1>
        )}
        footer={<ControlledPaginator onPageChange={changePages} selectedPage={currentPage} ariaLabel="controlled paginator no pages pagination" />}
      >
        <div>
          <Button text="Set Page to 9" onClick={() => { setCurrentPage(9); }} />
          <Button text="Set Page to 15" onClick={() => { setCurrentPage(15); }} />
          <Button text="Set Page to 45" onClick={() => { setCurrentPage(45); }} />
        </div>
        {content}
      </Dialog>
    </div>
  );
};

export default ControlledPaginatorExample;
