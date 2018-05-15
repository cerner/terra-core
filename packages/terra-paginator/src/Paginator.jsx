import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
          aria-label={`Page ${val}`}
          aria-current={ val === selectedPage && 'page' }
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
      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])}>
        {
          this.hasNavContext() && <a
            aria-disabled={ selectedPage === 1 }
            aria-label="first"
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handleOnKeyDown(1)}
          >
            First
          </a>
        }
        <a
          aria-disabled={ selectedPage === 1 }
          aria-label="previous"
          className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(previousPageIndex)}
          onKeyDown={this.handleOnKeyDown(previousPageIndex)}
        >
          <span className={cx('icon')} />Previous
        </a>
        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}
        <a
          aria-disabled={ selectedPage === totalPages }
          aria-label="next"
          className={cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled'])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(nextPageIndex)}
          onKeyDown={this.handleOnKeyDown(nextPageIndex)}
        >
          Next<span className={cx('icon')} />
        </a>
        {
          this.hasNavContext() && <a
            aria-disabled={ selectedPage === totalPages }
            aria-label="last"
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handleOnKeyDown(totalPages)}
          >
            Last
          </a>
        }
      </div>
    );

    return fullView;
  }

  reducedPaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;

    const reducedView = (
      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])} role="navigation" aria-label="pagination">
        {
          this.hasNavContext() && <a
            aria-disabled={ selectedPage === 1 }
            aria-label="first"
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
          >
            First
          </a>
        }
        <a
          aria-disabled={ selectedPage === 1 }
          aria-label="previous"
          className={cx(['nav-link', 'left-controls', 'previous', 'icon-only', selectedPage === 1 && 'is-disabled'])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(selectedPage === 1 ? 1 : selectedPage - 1)}
        >
          <span className={cx('icon')} />
        </a>
        {this.hasNavContext() && `Page ${selectedPage}`}
        <a
          aria-disabled={ selectedPage === totalPages }
          aria-label="next"
          className={cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled'])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(selectedPage === totalPages ? totalPages : selectedPage + 1)}
        >
          <span className={cx('icon')} />
        </a>
        {
          this.hasNavContext() && <a
            aria-disabled={ selectedPage === totalPages }
            aria-label="last"
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
          >
            Last
          </a>
        }
      </div>
    );

    return reducedView;
  }

  render() {
    return <ResponsiveElement defaultElement={this.reducedPaginator()} small={this.defaultPaginator()} />;
  }
}

Paginator.propTypes = propTypes;

export default Paginator;
