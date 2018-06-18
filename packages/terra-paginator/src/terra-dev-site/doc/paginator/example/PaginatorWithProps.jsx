import React from 'react';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import Spacer from 'terra-spacer';
import Paginator from 'terra-paginator/lib/Paginator';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      currentTotalCount: ["100"],
      currentPageCount: ["50"],
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
      currentPage: 5,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.resetPage} text={"Set to Page 5"} />
        <Spacer marginTop="small" marginBottom="small">
          <span>Total Count: </span>
          <ButtonGroup
            onChange={this.handleCurrentTotalCountChange}
            selectedKeys={this.state.currentTotalCount}
          >
            <ButtonGroup.Button text="100" key="100" />
            <ButtonGroup.Button text="500" key="500" />
            <ButtonGroup.Button text="1000" key="1000" />
          </ButtonGroup>
        </Spacer>
        <Spacer marginTop="small" marginBottom="small">
          <span>Page Count: </span>
          <ButtonGroup
            onChange={this.handleCurrentPageCountChange}
            selectedKeys={this.state.currentPageCount}
          >
            <ButtonGroup.Button text="25" key="25" />
            <ButtonGroup.Button text="50" key="50" />
            <ButtonGroup.Button text="100" key="100" />
          </ButtonGroup>
        </Spacer>
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
