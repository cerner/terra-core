import React from 'react';
import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';
import classNames from 'classnames/bind';
import styles from './PaginatorExampleCommon.module.scss';

const cx = classNames.bind(styles);
const totalCount = 450;

const buildPage = () => {
  const fullContent = [<p>This example is specifically used to display the progressive paginator within Anchor style. The whole example is not wrapped up by the Terra Dialog component like other paginator examples to avoid nested styling.</p>];

  return (
    fullContent
  );
};

class ProgressivePaginatorWithAnchorStyleExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: buildPage(),
      currentPage: 1,
    };

    this.changePages = this.changePages.bind(this);
  }

  changePages(index) {
    this.setState({ currentPage: index });
  }

  render() {
    return (
      <div className={cx('paginator-fusion-anchor-wrapper')}>
        <h1 id="progressive_paginator_fusion_anchor_header_id">
          Progressive Paginator in MPage Fusion Anchor style Example
        </h1>
        {this.state.content}
        <ProgressivePaginator onPageChange={this.changePages} anchorStyle selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} ariaLabelledBy="progressive_paginator_fusion_anchor_header_id" />
      </div>
    );
  }
}

export default ProgressivePaginatorWithAnchorStyleExample;
