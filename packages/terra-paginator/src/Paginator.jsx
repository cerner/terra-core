import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconNext from 'terra-icon/lib/icon/IconNext';
import IconPrevious from 'terra-icon/lib/icon/IconPrevious';
import ResponsiveElement from 'terra-responsive-element';

import 'terra-base/lib/baseStyles';
import styles from './Paginator.scss';

import { calculatePages, pageSet, KEYCODES } from './_paginationUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page.
   */
  selectedPage: PropTypes.number,
  /**
   * Total number of all items being paginated.
   */
  totalCount: PropTypes.number,
  /**
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
      pageSequence: selectedPage && totalCount ? pageSet(selectedPage, calculatePages(totalCount, itemCountPerPage)) : undefined,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.hasNavContext = this.hasNavContext.bind(this);
    this.buildPageButtons = this.buildPageButtons.bind(this);
    this.reducedPaginator = this.reducedPaginator.bind(this);
  }

  handlePageChange(index) {
    return (event) => {
      event.preventDefault();

      if (isNaN(index)) {
        this.props.onPageChange(event.target.text.trim().toLowerCase());

        return false;
      }

      this.props.onPageChange(index);
      this.setState({
        selectedPage: index,
        pageSequence: pageSet(index, calculatePages(this.props.totalCount, this.props.itemCountPerPage)),
      });

      return false;
    };
  }

  handleOnKeyDown(index) {
    return (event) => {
      if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
        if (isNaN(index)) {
          this.props.onPageChange(event.target.text.trim().toLowerCase());

          return false;
        }

        this.props.onPageChange(index);
        this.setState({
          selectedPage: index,
          pageSequence: pageSet(index, calculatePages(this.props.totalCount, this.props.itemCountPerPage)),
        });
      }

      return false;
    };
  }

  buildPageButtons(totalPages, onClick) {
    const { pageSequence, selectedPage } = this.state;

    const pageButtons = [];

    pageSequence.forEach((val) => {
      const paginationLinkClassNames = cx([
        'nav-link',
        val === selectedPage ? 'is-selected' : null,
      ]);

      if (val > totalPages) {
        return;
      }
      /* eslint-disable comma-dangle */
      pageButtons.push(
        <a
          className={paginationLinkClassNames}
          tabIndex={val === selectedPage ? null : '0'}
          key={`pageButton_${val}`}
          onClick={onClick(val)}
          onKeyDown={this.handleOnKeyDown(val)}
        >
          {val}
        </a>
      );
      /* eslint-enable comma-dangle */
    });

    return pageButtons;
  }

  hasNavContext() {
    return this.props.totalCount && this.props.itemCountPerPage;
  }

  defaultPaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    const fullView = (
      <div className={cx('paginator')}>
        {this.hasNavContext() && <a className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(1)} onKeyDown={this.handleOnKeyDown(1)}>First</a>}
        <a className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(previousPageIndex)} onKeyDown={this.handleOnKeyDown(previousPageIndex)}>{<IconPrevious />} Previous</a>
        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}
        <a className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(nextPageIndex)} onKeyDown={this.handleOnKeyDown(nextPageIndex)}>Next {<IconNext />}</a>
        {this.hasNavContext() && <a className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(totalPages)} onKeyDown={this.handleOnKeyDown(totalPages)}>Last</a>}
      </div>
    );

    return fullView;
  }

  reducedPaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;

    const reducedView = (
      <div className={cx('paginator')}>
        {this.hasNavContext() && <a className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(1)}>First</a>}
        <a className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(selectedPage === 1 ? 1 : selectedPage - 1)}>{<IconPrevious />}</a>
        {this.hasNavContext() && <span>Page {selectedPage}</span>}
        <a className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(selectedPage === totalPages ? totalPages : selectedPage + 1)}>{<IconNext />}</a>
        {this.hasNavContext() && <a className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])} tabIndex="0" onClick={this.handlePageChange(totalPages)}>Last</a>}
      </div>
    );

    return reducedView;
  }

  render() {
    return <ResponsiveElement defaultElement={this.reducedPaginator()} tiny={this.defaultPaginator()} />;
  }
}

Paginator.propTypes = propTypes;

export default Paginator;
