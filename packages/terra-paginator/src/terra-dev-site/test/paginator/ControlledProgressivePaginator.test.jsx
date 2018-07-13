import React from 'react';
import Button from 'terra-button';

import ControlledProgressivePaginator from '../../../ControlledProgressivePaginator';

const totalCount = 450;

class ProgressivePaginatorExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
    };

    this.changePages = this.changePages.bind(this);
  }

  changePages(index) {
    this.setState({ currentPage: index });
  }

  render() {
    return (
      <div style={{ height: '500px' }}>
        <Button id="button-9" text="Set Page to 9" onClick={() => { this.setState({ currentPage: 9 }); }} />
        <Button id="button-15" text="Set Page to 15" onClick={() => { this.setState({ currentPage: 15 }); }} />
        <Button id="button-45" text="Set Page to 45" onClick={() => { this.setState({ currentPage: 45 }); }} />
        <ControlledProgressivePaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} />
      </div>
    );
  }
}

export default ProgressivePaginatorExample;
