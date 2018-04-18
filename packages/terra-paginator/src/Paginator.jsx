import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconNext from 'terra-icon/lib/icon/IconNext';
import IconPrevious from 'terra-icon/lib/icon/IconPrevious';

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

const calculatePages = (totalCount, itemCountPerPage) => Math.ceil(totalCount / itemCountPerPage);

const pageSequence = (index, totalPages) => {
  var sequence = [];
  var numberShiftPoint = 7;
  var maxPagesDisplayed = 10;
  var previousSequenceCount = 5;
  var nextSequenceCount = 4;

  if (index < numberShiftPoint) {
    for (var i = 1; i <= 10; i++) {
      sequence.push(i);
    }
  } else if (index <= totalPages && index > totalPages - previousSequenceCount) {
    for (var i = totalPages; i > totalPages - maxPagesDisplayed; i--) {
      sequence.push(i);
    }
  } else {
    for (var i = index; i >= index - previousSequenceCount; i--) {
      sequence.push(i);
    }

    for (var i = index + 1; i <= index + nextSequenceCount; i++) {
      sequence.push(i);
    }
  }

  return sequence.sort((a, b) => a - b);
}

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
