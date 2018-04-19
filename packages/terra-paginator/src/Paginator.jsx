import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconNext from 'terra-icon/lib/icon/IconNext';
import IconPrevious from 'terra-icon/lib/icon/IconPrevious';
import { calculatePages, pageSequence } from './_paginationUtils';

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

    const { selectedPage, totalCount } = this.props;

    this.state = {
      selectedPage: selectedPage && totalCount ? selectedPage : undefined,
      pageSequence: selectedPage && totalCount ? pageSequence(selectedPage, totalCount) : undefined,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.buildPageButtons = this.buildPageButtons.bind(this);
  }

  handlePageChange(index) {
    if (index < 1) {
      index = 1;
    } else if (index > calculatePages(this.props.totalCount, this.props.itemCountPerPage)) {
      index = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    }

    return (event) => {
      this.props.onPageChange(event, index);
      this.setState({ selectedPage: index, pageSequence: pageSequence(index, this.props.totalCount) });
    }
  }

  buildPageButtons(totalPages, onClick) {
    const { pageSequence, selectedPage } = this.state;

    var pageButtons = [];

    pageSequence.forEach((val) => {
      const paginationLinkClassNames = cx([
        'nav-link',
        val === selectedPage ? 'is-selected' : null,
      ]);

      if (val > totalPages) {
        return;
      }

      pageButtons.push(<a className={paginationLinkClassNames} key={`pageButton_${val}`} onClick={onClick(val)}>{val}</a>);
    });

    return pageButtons;
  }

  render() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);

    return (
      <div className={cx('paginator')}>
        <a className={cx('nav-link')} onClick={this.handlePageChange(1)}>First</a>
        <a className={cx('nav-link')} onClick={this.handlePageChange(this.state.selectedPage - 1)}>{<IconPrevious />} Previous</a>
        {this.buildPageButtons(totalPages, this.handlePageChange)}
        <a className={cx('nav-link')} onClick={this.handlePageChange(this.state.selectedPage + 1)}>Next {<IconNext />}</a>
        <a className={cx('nav-link')} onClick={this.handlePageChange(totalPages)}>Last</a>
      </div>
    );
  }
}

Paginator.propTypes = propTypes;

export default Paginator;
