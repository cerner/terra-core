import React from 'react';
import Dialog from 'terra-dialog';
import Paginator from 'terra-paginator';
import classNames from 'classnames/bind';
import styles from './PaginatorExampleCommon.module.scss';

const cx = classNames.bind(styles);
const maxPages = 5;

const fillArray = (value, len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);
  }
  return arr;
};

const buildPage = () => {
  let fullContent = [<p>A digital front door to support engagement and enable consumers to participate in their health outcomes.</p>,
  <p>Enhanced communications and data flow to help the clinical care team provide high-quality care and facilitate increased clinician satisfaction and wellness, regardless of where care is provided</p>,
  <p>Integration across ambulatory systems and venues – even virtual health – to help drive efficiencies within clinic workflows, leveraging data in- and out-of-network – no matter the source system</p>];
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

class PaginatorNoPagesExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: <h2>Welcome!</h2>,
      currentPage: 1,
    };

    this.changePages = this.changePages.bind(this);
  }

  changePages(direction) {
    const index = direction === 'Next' ? this.state.currentPage + 1 : this.state.currentPage - 1;

    if (index >= maxPages) {
      this.setState({ content: <h2>No more pages...</h2>, currentPage: maxPages });
    } else if (index <= 1) {
      this.setState({ content: <h2>Welcome!</h2>, currentPage: 1 });
    } else {
      this.setState({ content: buildPage(), currentPage: index });
    }
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
          footer={<Paginator onPageChange={this.changePages} />}
        >
          {this.state.content}
        </Dialog>
      </div>
    );
  }
}

export default PaginatorNoPagesExample;
