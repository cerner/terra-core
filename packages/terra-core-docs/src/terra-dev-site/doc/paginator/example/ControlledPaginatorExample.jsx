import React from 'react';
import Dialog from 'terra-dialog';
import Button from 'terra-button';
import ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';
import classNames from 'classnames/bind';
import styles from './ControlledPaginatorCommon.module.scss';

const cx = classNames.bind(styles);

const totalCount = 450;

const fillArray = (value, len) => {
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);
  }
  return arr;
};

const buildPage = () => {
  let fullContent = [<p>Cerner Ambulatory offers simplified workflows across venues through integrated products and embedded collaborative content. Through intelligent solutions designed to help improve care quality, clinician efficiency, and operational improvements, Oracle Cerner is working to deliver:</p>,
    <ul>
      <li>Interoperability between systems and providers, regardless of EHR, with data infused directly into the ambulatory workflow</li>
      <li>A singular plan designed to help enhance care team collaboration while using unified tools, workflows, and access</li>
      <li>Integration between care venues, including acute and virtual</li>
      <li>Enhanced clinically driven revenue cycle functionality and ambulatory practice management workflows</li>
    </ul>];
  // const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  // + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '
  // + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '
  // + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '
  // + 'Aliquam eget maximus dui, ut rhoncus augue.');

  // fullContent = fillArray(content, 1);

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
          footer={<ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} />}
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

export default PaginatorExample;
