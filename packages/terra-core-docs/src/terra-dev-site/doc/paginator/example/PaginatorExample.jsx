import React from 'react';
import Dialog from 'terra-dialog';
import Paginator from 'terra-paginator';
import classNames from 'classnames/bind';
import styles from './PaginatorExampleCommon.module.scss';

const cx = classNames.bind(styles);

const totalCount = 450;

const buildPage = () => {
  const fullContent = [<p>Beyond general financial constraints, here are some goals to consider when developing your ambulatory approach:</p>,
    <ul>
      <li>Provide consumers with lower cost and convenient care options</li>
      <li>Capture and engage existing patients while identifying and attracting new patients</li>
      <li>Identify ways to facilitate referrals across the network, share information with in- and out-of-network care providers and manage care across the continuum</li>
      <li>Implement and manage strategies to meet rapidly growing consumer demands around virtual health</li>
      <li>Optimize for key service lines across the network to support care coordination and maximize revenue generation</li>
      <li>Implement an outpatient electronic health record (EHR) that contributes to improved clinician efficiency and satisfaction</li>
      <li>Manage practice operations while accounting for emerging payment models</li>
    </ul>,
  ];

  return (
    fullContent
  );
};

class PaginatorExample extends React.Component {
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
          footer={<Paginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}
        >
          {this.state.content}
        </Dialog>
      </div>
    );
  }
}

export default PaginatorExample;
