import React, { useState } from 'react';
import Dialog from 'terra-dialog';
import Button from 'terra-button';
import ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';
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
  let fullContent = [<p>We connect data and care through workflows and documentation with our integrated electronic health record (EHR) that’s tailored to behavioral health.</p>,
  <p>Our Cerner Behavioral Health solutions help organizations combine real-time clinical data across each patient’s unique healthcare journey, including both mental health and primary care, into one view so your providers can provide the right care when it matters. With the tools to help collect, view, and submit information all within our EHR, your providers can focus on the most important work – getting patients on track to recovery faster.</p>];
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

const ControlledInfiniteProgressivePaginatorExample = () => {
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
        footer={<ControlledProgressivePaginator onPageChange={changePages} selectedPage={currentPage} />}
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

export default ControlledInfiniteProgressivePaginatorExample;
