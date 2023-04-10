import React from 'react';
import Dialog from 'terra-dialog';
import Button from 'terra-button';
import ControlledProgressivePaginator from 'terra-paginator/lib/ControlledProgressivePaginator';
import classNames from 'classnames/bind';
import styles from './ControlledPaginatorCommon.module.scss';

const cx = classNames.bind(styles);

const totalCount = 450;

const buildPage = () => {
  const fullContent = [<p>Each year, more than half of the nearly 50 million American adults1 experiencing mental illness do not receive the treatment they need. As the demand for services continues to increase, behavioral healthcare providers struggle to provide timely, holistic treatment when and where patients need it most. Additionally, behavioral health organizations face staffing shortages, extensive reporting processes, compliance requirements, and siloed technology systems.</p>,
  <p>Providers need a solution that helps ease their burden so they can make timely, informed care decisions benefiting their patients.</p>];

  return (
    fullContent
  );
};

class ProgressivePaginatorExample extends React.Component {
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
      <div className={cx('paginator-wrapper')}>
        <Dialog
          header={(
            <h1>
              Page
              {this.state.currentPage}
            </h1>
)}
          footer={<ControlledProgressivePaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} />}
        >
          <div>
            <Button text="Set Page to 9" onClick={() => { this.setState({ currentPage: 9 }); }} />
            <Button text="Set Page to 15" onClick={() => { this.setState({ currentPage: 15 }); }} />
            <Button text="Set Page to 45" onClick={() => { this.setState({ currentPage: 45 }); }} />
          </div>
          {this.state.content}
        </Dialog>
      </div>
    );
  }
}

export default ProgressivePaginatorExample;
