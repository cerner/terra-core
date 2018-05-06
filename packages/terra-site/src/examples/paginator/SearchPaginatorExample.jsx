import React from 'react';
import Dialog from 'terra-dialog';
import Paginator from 'terra-paginator/src/Paginator';

const totalCount = 450;

class SearchPaginatorExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.buildPage(),
      currentPage: 1,
    };

    this.buildPage = this.buildPage.bind(this);
    this.changePages = this.changePages.bind(this);
  }

  fillArray(value, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
      arr.push(value);
    }
    return arr;
  }

  changePages(index) {
    this.setState({ currentPage: index });
  }

  buildPage() {
    let fullContent = [];
    const content = (
      <p key={Math.floor(Math.random() * Math.floor(1000))}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel.
        Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh.
        Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis.
        Aliquam eget maximus dui, ut rhoncus augue.
      </p>
    );

    fullContent = this.fillArray(content, 10);

    return (
      fullContent
    );
  }

  render() {
    return (
      <div style={{ height: '500px' }}>
        <Dialog header={<h1>Page {this.state.currentPage}</h1>} footer={<Paginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}>
          {this.state.content}
        </Dialog>
      </div>
    );
  }
}

export default SearchPaginatorExample;
