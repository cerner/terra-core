import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import * as KeyCode from 'keycode-js';
import styles from './Paginator.module.scss';
import { calculatePages } from './_paginationUtils';
import PaginatorButton from './_PaginatorButton';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Function to be executed when a navigation element is selected.
   */
  onPageChange: PropTypes.func.isRequired,
  /**
   * The active/selected page.
   */
  selectedPage: PropTypes.number.isRequired,
  /**
   * Total number of all items being paginated.
   */
  totalCount: PropTypes.number.isRequired,
  /**
   * Total number of items per page.
   */
  itemCountPerPage: PropTypes.number.isRequired,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
};

class ProgressivePaginator extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.defaultProgressivePaginator = this.defaultProgressivePaginator.bind(this);
    this.reducedProgressivePaginator = this.reducedProgressivePaginator.bind(this);
  }

  handlePageChange(index) {
    return (event) => {
      event.preventDefault();

      this.props.onPageChange(index);
    };
  }

  handleOnKeyDown(index) {
    return (event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        event.preventDefault();

        if (Number.isNaN(Number(index))) {
          this.props.onPageChange(event.target.text.trim().toLowerCase());

          return false;
        }

        this.props.onPageChange(index);
      }

      return false;
    };
  }

  defaultProgressivePaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage, intl } = this.props;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    return (
      <div className={cx(['paginator', 'progressive'])} role="navigation" aria-label="pagination">
        <div>
          {intl.formatMessage({ id: 'Terra.paginator.pageCount' }, { pageNumber: selectedPage, pageNumberTotal: totalPages })}
        </div>
        <div>
          <PaginatorButton
            aria-disabled={selectedPage === 1}
            aria-label={intl.formatMessage({ id: 'Terra.paginator.first' })}
            className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handleOnKeyDown(1)}
            type="button"
          >
            {intl.formatMessage({ id: 'Terra.paginator.first' })}
          </PaginatorButton>
          <PaginatorButton
            aria-disabled={selectedPage === 1}
            aria-label={intl.formatMessage({ id: 'Terra.paginator.previous' })}
            className={cx(['nav-link', 'previous', selectedPage === 1 ? 'is-disabled' : null])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(previousPageIndex)}
            onKeyDown={this.handleOnKeyDown(previousPageIndex)}
            type="button"
          >
            <span className={cx('icon')} />
            {intl.formatMessage({ id: 'Terra.paginator.previous' })}
          </PaginatorButton>
          <PaginatorButton
            aria-disabled={selectedPage === totalPages}
            aria-label={intl.formatMessage({ id: 'Terra.paginator.next' })}
            className={cx(['nav-link', 'next', selectedPage === totalPages ? 'is-disabled' : null])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(nextPageIndex)}
            onKeyDown={this.handleOnKeyDown(nextPageIndex)}
            type="button"
          >
            {intl.formatMessage({ id: 'Terra.paginator.next' })}
            <span className={cx('icon')} />
          </PaginatorButton>
          <PaginatorButton
            aria-disabled={selectedPage === totalPages}
            aria-label={intl.formatMessage({ id: 'Terra.paginator.last' })}
            className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handleOnKeyDown(totalPages)}
            type="button"
          >
            {intl.formatMessage({ id: 'Terra.paginator.last' })}
          </PaginatorButton>
        </div>
      </div>
    );
  }

  reducedProgressivePaginator() {
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage, intl } = this.props;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    return (
      <div className={cx(['paginator'])} role="navigation" aria-label="pagination">
        <div>
          <PaginatorButton
            aria-disabled={selectedPage === 1}
            aria-label={intl.formatMessage({ id: 'Terra.paginator.first' })}
            className={cx(['nav-link', selectedPage === 1 ? 'is-disabled' : null])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handleOnKeyDown(1)}
            type="button"
          >
            {intl.formatMessage({ id: 'Terra.paginator.first' })}
          </PaginatorButton>
          <PaginatorButton
            aria-disabled={selectedPage === 1}
            aria-label={intl.formatMessage({ id: 'Terra.paginator.previous' })}
            className={cx(['nav-link', 'previous', 'icon-only', selectedPage === 1 ? 'is-disabled' : null])}
            tabIndex={selectedPage === 1 ? null : '0'}
            onClick={this.handlePageChange(previousPageIndex)}
            onKeyDown={this.handleOnKeyDown(previousPageIndex)}
            type="button"
          >
            <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.previous' })} />
            <span className={cx('icon')} />
          </PaginatorButton>
        </div>
        <div>
          {intl.formatMessage({ id: 'Terra.paginator.pageCount' }, { pageNumber: selectedPage, pageNumberTotal: totalPages })}
        </div>
        <div>
          <PaginatorButton
            aria-disabled={selectedPage === totalPages}
            aria-label={intl.formatMessage({ id: 'Terra.paginator.next' })}
            className={cx(['nav-link', 'next', 'icon-only', selectedPage === totalPages ? 'is-disabled' : null])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(nextPageIndex)}
            onKeyDown={this.handleOnKeyDown(nextPageIndex)}
            type="button"
          >
            <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.next' })} />
            <span className={cx('icon')} />
          </PaginatorButton>
          <PaginatorButton
            aria-disabled={selectedPage === totalPages}
            aria-label={intl.formatMessage({ id: 'Terra.paginator.last' })}
            className={cx(['nav-link', selectedPage === totalPages ? 'is-disabled' : null])}
            tabIndex={selectedPage === totalPages ? null : '0'}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handleOnKeyDown(totalPages)}
            type="button"
          >
            {intl.formatMessage({ id: 'Terra.paginator.last' })}
          </PaginatorButton>
        </div>
      </div>
    );
  }

  render() {
    return <ResponsiveElement defaultElement={this.reducedProgressivePaginator()} tiny={this.defaultProgressivePaginator()} />;
  }
}

ProgressivePaginator.propTypes = propTypes;

export default injectIntl(ProgressivePaginator);
