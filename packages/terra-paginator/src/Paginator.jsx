import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Paginator.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /*
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /*
   * The active/selected page.
   */
  selectedPage: PropTypes.number,
  /*
   * Total number of all items being paginated.
   */
  totalCount: PropTypes.number,
  /*
   * Total number of items per page.
   */
  itemCountPerPage: PropTypes.number,
};

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    const { onPageChange, selectedPage, totalCount, itemCountPerPage } = this.props;

    this.state = {
      selectedPage: selectedPage ? selectedPage : undefined,
    };

    this.handlePageChange = this.handlePageChange(this);
  }

  handlePageChange(e) {
    return true;
  }

  render() {
    return (<div onClick={this.handlePageChange}>Hello World!</div>);
  }
}

Paginator.propTypes = propTypes;

export default Paginator;
