import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResponsiveElement from 'terra-responsive-element';

import 'terra-base/lib/baseStyles';
import styles from './Paginator.module.scss';

import { calculatePages, pageSet, KeyCode } from './_paginationUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page. Used to set the default selected page or maintain selection across renders.
   * Required when using totalCount and itemCountPerPage.
   */
  selectedPage: PropTypes.number,
  /**
   * Total number of all items being paginated.
   * Required when using itemCountPerPage and selectedPage.
   */
  totalCount: PropTypes.number,
  /**
   * Total number of items per page.
   * Required when using selectedPage and totalCount.
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

      if (Number.isNaN(Number(index))) {
        this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

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
      if (event.nativeEvent.keyCode === KeyCode.KEY_ENTER || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        event.preventDefault();

        if (Number.isNaN(Number(index))) {
          this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

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

  // TODO: Resolve lint issues - https://github.com/cerner/terra-core/issues/1689
  /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid, jsx-a11y/no-noninteractive-tabindex */
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
      /* eslint-disable jsx-a11y/aria-props */
      pageButtons.push((
        <a
          aria-label={`Page ${val}`}
          aria-current={val === selectedPage && 'page'}
          className={paginationLinkClassNames}
          tabIndex={val === selectedPage ? null : '0'}
          key={`pageButton_${val}`}
          onClick={onClick(val)}
          onKeyDown={this.handleOnKeyDown(val)}
        >
          {val}
        </a>
      ));
      /* eslint-enable jsx-a11y/aria-props */
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
          this.hasNavContext() && (
          <a
            aria-disabled={selectedPage === 1}
            aria-label="first"
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handleOnKeyDown(1)}
          >
            First
          </a>
          )
        }
        <a
          aria-disabled={selectedPage === 1}
          aria-label="previous"
          className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(previousPageIndex)}
          onKeyDown={this.handleOnKeyDown(previousPageIndex)}
        >
          <span className={cx('icon')} />
Previous
        </a>
        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}
        <a
          aria-disabled={selectedPage === totalPages}
          aria-label="next"
          className={cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled'])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(nextPageIndex)}
          onKeyDown={this.handleOnKeyDown(nextPageIndex)}
        >
          Next
          <span className={cx('icon')} />
        </a>
        {
          this.hasNavContext() && (
          <a
            aria-disabled={selectedPage === totalPages}
            aria-label="last"
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handleOnKeyDown(totalPages)}
          >
            Last
          </a>
          )
        }
      </div>
    );

    return fullView;
  }

  reducedPaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.state;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    const reducedView = (
      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])} role="navigation" aria-label="pagination">
        {
          this.hasNavContext() && (
          <a
            aria-disabled={selectedPage === 1}
            aria-label="first"
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handleOnKeyDown(1)}
          >
            First
          </a>
          )
        }
        <a
          aria-disabled={selectedPage === 1}
          aria-label="previous"
          className={cx(['nav-link', 'left-controls', 'previous', 'icon-only', selectedPage === 1 && 'is-disabled'])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(previousPageIndex)}
          onKeyDown={this.handleOnKeyDown(previousPageIndex)}
        >
          <span className={cx('visually-hidden')}>Previous</span>
          <span className={cx('icon')} />
        </a>
        {this.hasNavContext() && `Page ${selectedPage}`}
        <a
          aria-disabled={selectedPage === totalPages}
          aria-label="next"
          className={cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled'])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(nextPageIndex)}
          onKeyDown={this.handleOnKeyDown(nextPageIndex)}
        >
          <span className={cx('visually-hidden')}>Next</span>
          <span className={cx('icon')} />
        </a>
        {
          this.hasNavContext() && (
          <a
            aria-disabled={selectedPage === totalPages}
            aria-label="last"
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handleOnKeyDown(totalPages)}
          >
            Last
          </a>
          )
        }
      </div>
    );

    return reducedView;
  }

  /* eslint-enable jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid, jsx-a11y/no-noninteractive-tabindex */
  render() {
    return <ResponsiveElement defaultElement={this.reducedPaginator()} small={this.defaultPaginator()} />;
  }
}

Paginator.propTypes = propTypes;

export default Paginator;
