import React, { useState } from 'react';
import Dialog from 'terra-dialog';
import Button from 'terra-button';
import ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';
import classNames from 'classnames/bind';
import styles from './ControlledPaginatorCommon.module.scss';

const cx = classNames.bind(styles);

const fillArray = (value, len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);
  }
  return arr;
};

const buildPage = () => {
  let fullContent = [<p>When combining the enhanced features of the Cerner Ambulatory EHR with integrated and comprehensive ambulatory support, Oracle Cerner aims to help deliver value across five key areas:</p>,
  <ul>
    <li>Keep the patient, their safety, and quality of care at the center of all solutions</li>
    <li>Focus on improving clinician satisfaction while reducing the cognitive burden</li>
    <li>Facilitate coordination and communication across the care team, including the patient</li>
    <li>Enhance specific capabilities to support focused specialties</li>
    <li>Seek to optimize revenue and reduce total cost of care</li>
  </ul>];
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
        footer={<ControlledPaginator onPageChange={changePages} selectedPage={currentPage} />}
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
