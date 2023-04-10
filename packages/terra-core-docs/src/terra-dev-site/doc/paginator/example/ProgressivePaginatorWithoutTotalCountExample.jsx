import React, { useState } from 'react';
import Dialog from 'terra-dialog';
import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';
import classNames from 'classnames/bind';
import styles from './PaginatorExampleCommon.module.scss';

const cx = classNames.bind(styles);

const fillArray = (value, len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);
  }
  return arr;
};

const buildPage = () => {
  let fullContent = [<p>Cerner Ambulatory Surgery Center integrates our established surgical, anesthesia, inventory, revenue cycle management and patient portal products on a single EHR platform to help simplify the management of an ambulatory surgery center.</p>,
  <p>With future growth in mind, Cerner Ambulatory Surgery Center is contemporary, scalable and flexible.</p>,
  <p>Cerner Ambulatory Surgery Center aims to enable clinicians and staff to focus on what truly matters – a safe, personal and efficient patient experience.</p>];
  // const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  //   + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '
  //   + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '
  //   + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '
  //   + 'Aliquam eget maximus dui, ut rhoncus augue.');

  // fullContent = fillArray(content, 10);

  return (
    fullContent
  );
};

const InfiniteProgressivePaginatorExample = () => {
  const [content] = useState(buildPage());
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
        footer={<ProgressivePaginator onPageChange={changePages} />}
      >
        {content}
      </Dialog>
    </div>
  );
};

export default InfiniteProgressivePaginatorExample;
