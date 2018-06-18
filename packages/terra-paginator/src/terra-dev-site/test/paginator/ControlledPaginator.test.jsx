import React from 'react';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import Paginator from '../../../Paginator';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      currentTotalCount: ['100'],
      currentPageCount: ['50'],
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.handleCurrentPageCountChange = this.handleCurrentPageCountChange.bind(this);
    this.handleCurrentTotalCountChange = this.handleCurrentTotalCountChange.bind(this);
  }

  handleCurrentTotalCountChange(event, selectedKey) {
    this.setState({ currentTotalCount: [selectedKey] });
  }

  handleCurrentPageCountChange(event, selectedKey) {
    this.setState({ currentPageCount: [selectedKey] });
  }

  handlePageChange(index) {
    this.setState({
      currentPage: index,
    });
  }

  resetPage() {
    this.setState({
      currentPage: 3,
    });
  }

  render() {
    return (
      <div>
        <Button id="switch-page" onClick={this.resetPage} text="Set to Page 3" />
        <div>
          <span>Total Count: </span>
          <ButtonGroup
            onChange={this.handleCurrentTotalCountChange}
            selectedKeys={this.state.currentTotalCount}
          >
            <ButtonGroup.Button id="total-count-100" text="100" key="100" />
            <ButtonGroup.Button id="total-count-500" text="500" key="500" />
            <ButtonGroup.Button id="total-count-1000" text="1000" key="1000" />
          </ButtonGroup>
        </div>
        <div>
          <span>Page Count: </span>
          <ButtonGroup
            onChange={this.handleCurrentPageCountChange}
            selectedKeys={this.state.currentPageCount}
          >
            <ButtonGroup.Button id="page-count-25" text="25" key="25" />
            <ButtonGroup.Button id="page-count-50" text="50" key="50" />
            <ButtonGroup.Button id="page-count-100" text="100" key="100" />
          </ButtonGroup>
        </div>
        <Paginator
          onPageChange={this.handlePageChange}
          selectedPage={this.state.currentPage}
          totalCount={parseInt(this.state.currentTotalCount[0], 10)}
          itemCountPerPage={parseInt(this.state.currentPageCount[0], 10)}
        />
      </div>
    );
  }
}
