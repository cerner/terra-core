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

    const { selectedPage, totalCount, itemCountPerPage } = this.props;

    this.state = {
      selectedPage: selectedPage && totalCount ? selectedPage : undefined,
      pageSequence: selectedPage && totalCount ? pageSequence(selectedPage, calculatePages(totalCount, itemCountPerPage)) : undefined,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.hasNavContext = this.hasNavContext.bind(this);
    this.buildPageButtons = this.buildPageButtons.bind(this);
  }

  handlePageChange(index) {
    return (event) => {
      this.props.onPageChange(event, index);
      this.setState({ selectedPage: index, pageSequence: pageSequence(index, calculatePages(this.props.totalCount, this.props.itemCountPerPage)) });
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

      pageButtons.push(<a className={paginationLinkClassNames} tabIndex={val === selectedPage ? null : '0'} key={`pageButton_${val}`} onClick={onClick(val)}>{val}</a>);
    });

    return pageButtons;
  }

  hasNavContext() {
    return this.props.totalCount && this.props.itemCountPerPage;
  }

  render() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;

    return (
      <div className={cx('paginator')}>
        {this.hasNavContext() && <a className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(1)}>First</a>}
        <a className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(selectedPage === 1 ? 1 : selectedPage - 1)}>{<IconPrevious />} Previous</a>
        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}
        <a className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(selectedPage === totalPages ? totalPages : selectedPage + 1)}>Next {<IconNext />}</a>
        {this.hasNavContext() && <a className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(totalPages)}>Last</a>}
      </div>
    );
  }
}

Paginator.propTypes = propTypes;

export default Paginator;
