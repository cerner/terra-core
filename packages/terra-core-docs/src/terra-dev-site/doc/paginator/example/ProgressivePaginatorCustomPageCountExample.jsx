import React from 'react';
import Dialog from 'terra-dialog';
import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';
import classNames from 'classnames/bind';
import styles from './PaginatorExampleCommon.module.scss';

const cx = classNames.bind(styles);
const totalCount = 450;
const itemCountPerPage = 10;

const buildPage = () => {
  const fullContent = [<p>Patients are requesting greater affordability and efficiency in healthcare. With procedures performed in an ambulatory surgery center costing up to 60% less compared to a hospital outpatient department (1), the demand for these facilities is increasing. In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care. Healthcare IT products can help improve clinician efficiency and patient outcomes, as well as enhance communication and data exchange between ambulatory surgery center providers and patients.</p>];

  return (
    fullContent
  );
};

class ProgressivePaginatorCustomPageCountExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: buildPage(),
      currentPage: 1,
      pageLabel: `Summary 1 in ${Math.abs(totalCount / itemCountPerPage)}`,
    };

    this.changePages = this.changePages.bind(this);
  }

  changePages(index) {
    this.setState({ currentPage: index });
    this.setState({ pageLabel: `Summary ${index} in total ${Math.abs(totalCount / itemCountPerPage)}` });
  }

  render() {
    return (
      <div className={cx('paginator-wrapper')}>
        <Dialog
          header={(
            <h1 id="progressive_paginator_header_id">
              Progressive Paginator With Custom PageLabel and Page Count
            </h1>
)}
          // eslint-disable-next-line react/prop-types
          footer={<ProgressivePaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={itemCountPerPage} ariaLabelledBy="progressive_paginator_header_id" pageLabel={this.state.pageLabel} hidePageCount />}
        >
          {this.state.content}
        </Dialog>
        <b>Note: Ensure translated string is provided for pageLabel to make it accessible in different locales</b>
      </div>
    );
  }
}

export default ProgressivePaginatorCustomPageCountExample;
