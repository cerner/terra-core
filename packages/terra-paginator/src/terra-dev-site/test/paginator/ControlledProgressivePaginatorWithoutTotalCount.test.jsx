import React, { useState } from 'react';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import ControlledProgressivePaginator from '../../../ControlledProgressivePaginator';
import styles from './ControlledPaginatorTestCommon.module.scss';

const cx = classNames.bind(styles);

const ControlledProgressivePaginatorWithoutTotalCount = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePages = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className={cx('paginator-wrapper')}>
      <Button id="button-9" text="Set Page to 9" onClick={() => { setCurrentPage(9); }} />
      <Button id="button-15" text="Set Page to 15" onClick={() => { setCurrentPage(15); }} />
      <Button id="button-45" text="Set Page to 45" onClick={() => { setCurrentPage(45); }} />
      <ControlledProgressivePaginator onPageChange={changePages} selectedPage={currentPage} />
    </div>
  );
};

export default ControlledProgressivePaginatorWithoutTotalCount;
