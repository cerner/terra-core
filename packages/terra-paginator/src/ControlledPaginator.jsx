import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ResponsiveElement from 'terra-responsive-element';
import KeyCode from 'keycode-js';
import styles from './Paginator.module.scss';
import { calculatePages, pageSet } from './_paginationUtils';

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
  selectedPage: PropTypes.number.isRequired,
  /**
   * Total number of all items being paginated.
   * Required when using itemCountPerPage and selectedPage.
   */
  totalCount: PropTypes.number.isRequired,
  /**
   * Total number of items per page.
   * Required when using selectedPage and totalCount.
   */
  itemCountPerPage: PropTypes.number.isRequired,
};

const contextTypes = {
  /* eslint-disable consistent-return */
  intl: (context) => {
    if (context.intl === undefined) {
      return new Error('Component is internationalized, and must be wrapped in terra-base');
    }
  },
};

class Paginator extends React.Component {
  constructor(props) {
    super(props);

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

      return false;
    };
  }

  handleOnKeyDown(index) {
    return (event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        event.preventDefault();

        if (Number.isNaN(Number(index))) {
          this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

          return false;
        }

        this.props.onPageChange(index);
      }

      return false;
    };
  }

  buildPageButtons(totalPages, onClick) {
    const { totalCount, itemCountPerPage, selectedPage } = this.props;
    const pageSequence = pageSet(selectedPage, calculatePages(totalCount, itemCountPerPage));
    const pageButtons = [];

    pageSequence.forEach((val) => {
      const paginationLinkClassNames = cx([
        'nav-link',
        val === selectedPage ? 'is-selected' : null,
      ]);

      if (val > totalPages) {
        return;
      }
      pageButtons.push((
        <button
          aria-label={this.context.intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: val })}
          aria-current={val === selectedPage && 'page'}
          className={paginationLinkClassNames}
          tabIndex={val === selectedPage ? null : '0'}
          key={`pageButton_${val}`}
          onClick={onClick(val)}
          onKeyDown={this.handleOnKeyDown(val)}
          type="button"
        >
          {val}
        </button>));
    });

    return pageButtons;
  }

  hasNavContext() {
    return this.props.totalCount && this.props.itemCountPerPage;
  }

  defaultPaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.props;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    const fullView = (
      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])}>
        {
          this.hasNavContext() && (
          <button
            aria-disabled={selectedPage === 1}
            aria-label={this.context.intl.formatMessage({ id: 'Terra.paginator.first' })}
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handleOnKeyDown(1)}
            type="button"
          >
            {this.context.intl.formatMessage({ id: 'Terra.paginator.first' })}
          </button>
          )
        }
        <button
          aria-disabled={selectedPage === 1}
          aria-label={this.context.intl.formatMessage({ id: 'Terra.paginator.previous' })}
          className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(previousPageIndex)}
          onKeyDown={this.handleOnKeyDown(previousPageIndex)}
          type="button"
        >
          <span className={cx('icon')} />
          {this.context.intl.formatMessage({ id: 'Terra.paginator.previous' })}
        </button>
        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}
        <button
          aria-disabled={selectedPage === totalPages}
          aria-label={this.context.intl.formatMessage({ id: 'Terra.paginator.next' })}
          className={cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled'])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(nextPageIndex)}
          onKeyDown={this.handleOnKeyDown(nextPageIndex)}
          type="button"
        >
          {this.context.intl.formatMessage({ id: 'Terra.paginator.next' })}
          <span className={cx('icon')} />
        </button>
        {
          this.hasNavContext() && (
          <button
            aria-disabled={selectedPage === totalPages}
            aria-label={this.context.intl.formatMessage({ id: 'Terra.paginator.last' })}
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handleOnKeyDown(totalPages)}
            type="button"
          >
            {this.context.intl.formatMessage({ id: 'Terra.paginator.last' })}
          </button>
          )
        }
      </div>
    );

    return fullView;
  }

  reducedPaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage } = this.props;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    const reducedView = (
      <div className={cx(['paginator', !this.hasNavContext() && 'pageless'])} role="navigation" aria-label="pagination">
        {
          this.hasNavContext() && (
          <button
            aria-disabled={selectedPage === 1}
            aria-label={this.context.intl.formatMessage({ id: 'Terra.paginator.first' })}
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handleOnKeyDown(1)}
            type="button"
          >
            {this.context.intl.formatMessage({ id: 'Terra.paginator.first' })}
          </button>
          )
        }
        <button
          aria-disabled={selectedPage === 1}
          aria-label={this.context.intl.formatMessage({ id: 'Terra.paginator.previous' })}
          className={cx(['nav-link', 'left-controls', 'previous', 'icon-only', selectedPage === 1 && 'is-disabled'])}
          tabIndex={selectedPage === 1 ? null : '0'}
          onClick={this.handlePageChange(previousPageIndex)}
          onKeyDown={this.handleOnKeyDown(previousPageIndex)}
          type="button"
        >
          <span className={cx('visually-hidden')}>{this.context.intl.formatMessage({ id: 'Terra.paginator.previous' })}</span>
          <span className={cx('icon')} />
        </button>
        {this.hasNavContext() && this.context.intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: selectedPage })}
        <button
          aria-disabled={selectedPage === totalPages}
          aria-label={this.context.intl.formatMessage({ id: 'Terra.paginator.next' })}
          className={cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled'])}
          tabIndex={selectedPage === totalPages ? null : '0'}
          onClick={this.handlePageChange(nextPageIndex)}
          onKeyDown={this.handleOnKeyDown(nextPageIndex)}
          type="button"
        >
          <span className={cx('visually-hidden')}>{this.context.intl.formatMessage({ id: 'Terra.paginator.next' })}</span>
          <span className={cx('icon')} />
        </button>
        {
          this.hasNavContext() && (
          <button
            aria-disabled={selectedPage === totalPages}
            aria-label={this.context.intl.formatMessage({ id: 'Terra.paginator.last' })}
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handleOnKeyDown(totalPages)}
            type="button"
          >
            {this.context.intl.formatMessage({ id: 'Terra.paginator.last' })}
          </button>
          )
        }
      </div>
    );

    return reducedView;
  }

  render() {
    return <ResponsiveElement tiny={this.reducedPaginator()} small={this.defaultPaginator()} />;
  }
}

Paginator.propTypes = propTypes;
Paginator.contextTypes = contextTypes;

export default Paginator;
