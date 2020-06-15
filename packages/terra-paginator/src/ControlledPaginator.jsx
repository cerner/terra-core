import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl, intlShape } from 'react-intl';
import ResponsiveElement from 'terra-responsive-element';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import * as KeyCode from 'keycode-js';
import styles from './Paginator.module.scss';
import { calculatePages, pageSet } from './_paginationUtils';
import PaginatorButton from './_PaginatorButton';

const cx = classNamesBind.bind(styles);

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
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: intlShape.isRequired,
};

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);
    this.hasNavContext = this.hasNavContext.bind(this);
    this.buildPageButtons = this.buildPageButtons.bind(this);
    this.reducedPaginator = this.reducedPaginator.bind(this);
    this.setPaginator = this.setPaginator.bind(this);
    this.state = {
      showReducedPaginator: false,
    };
  }

  setPaginator(value) {
    const showReducedPaginator = value === 'tiny';
    if (this.state.showReducedPaginator !== showReducedPaginator) {
      this.setState({ showReducedPaginator });
    }
  }

  handlePageChange(index) {
    return (event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        event.preventDefault();
      }

      if (Number.isNaN(Number(index))) {
        this.props.onPageChange(event.currentTarget.attributes['aria-label'].value);

        return false;
      }

      this.props.onPageChange(index);

      return false;
    };
  }

  buildPageButtons(totalPages, onClick) {
    const {
      totalCount,
      itemCountPerPage,
      selectedPage,
      intl,
    } = this.props;
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
        <PaginatorButton
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: val })}
          ariaCurrent={val === selectedPage}
          className={paginationLinkClassNames}
          key={`pageButton_${val}`}
          onClick={onClick(val)}
          onKeyDown={onClick(val)}
          tabIndex={val === selectedPage ? '-1' : '0'}
        >
          {val}
        </PaginatorButton>));
    });

    return pageButtons;
  }

  hasNavContext() {
    return this.props.totalCount && this.props.itemCountPerPage;
  }

  defaultPaginator() {
    const theme = this.context;
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage, intl } = this.props;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    const fullView = (
      <div className={cx('paginator', !this.hasNavContext() && 'pageless', theme.className)}>
        {
          this.hasNavContext() && (
          <PaginatorButton
            ariaDisabled={selectedPage === 1}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.first' })}
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            disabled={selectedPage === 1}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handlePageChange(1)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.first' })}
          </PaginatorButton>
          )
        }
        <PaginatorButton
          ariaDisabled={selectedPage === 1}
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.previous' })}
          className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}
          disabled={selectedPage === 1}
          onClick={this.handlePageChange(previousPageIndex)}
          onKeyDown={this.handlePageChange(previousPageIndex)}
        >
          <span className={cx('icon')} />
          {intl.formatMessage({ id: 'Terra.paginator.previous' })}
        </PaginatorButton>
        {this.hasNavContext() && this.buildPageButtons(totalPages, this.handlePageChange)}
        <PaginatorButton
          ariaDisabled={selectedPage === totalPages}
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.next' })}
          className={cx(['nav-link', 'right-controls', 'next', selectedPage === totalPages && 'is-disabled'])}
          disabled={selectedPage === totalPages}
          onClick={this.handlePageChange(nextPageIndex)}
          onKeyDown={this.handlePageChange(nextPageIndex)}
        >
          {intl.formatMessage({ id: 'Terra.paginator.next' })}
          <span className={cx('icon')} />
        </PaginatorButton>
        {
          this.hasNavContext() && (
          <PaginatorButton
            ariaDisabled={selectedPage === totalPages}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.last' })}
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            disabled={selectedPage === totalPages}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handlePageChange(totalPages)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.last' })}
          </PaginatorButton>
          )
        }
      </div>
    );

    return fullView;
  }

  reducedPaginator() {
    const theme = this.context;
    const totalPages = calculatePages(this.props.totalCount, this.props.itemCountPerPage);
    const { selectedPage, intl } = this.props;
    const previousPageIndex = selectedPage === 1 ? 1 : selectedPage - 1;
    const nextPageIndex = selectedPage === totalPages ? totalPages : selectedPage + 1;

    const reducedView = (
      <div className={cx('paginator', !this.hasNavContext() && 'pageless', theme.className)} role="navigation" aria-label="pagination">
        {
          this.hasNavContext() && (
          <PaginatorButton
            ariaDisabled={selectedPage === 1}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.first' })}
            className={cx(['nav-link', 'left-controls', selectedPage === 1 && 'is-disabled'])}
            disabled={selectedPage === 1}
            onClick={this.handlePageChange(1)}
            onKeyDown={this.handlePageChange(1)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.first' })}
          </PaginatorButton>
          )
        }
        <PaginatorButton
          ariaDisabled={selectedPage === 1}
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.previous' })}
          className={cx(['nav-link', 'left-controls', 'previous', selectedPage === 1 && 'is-disabled'])}
          disabled={selectedPage === 1}
          onClick={this.handlePageChange(previousPageIndex)}
          onKeyDown={this.handlePageChange(previousPageIndex)}
        >
          <span className={cx('icon')} />
          {intl.formatMessage({ id: 'Terra.paginator.previous' })}
        </PaginatorButton>
        {this.hasNavContext() && intl.formatMessage({ id: 'Terra.paginator.pageIndex' }, { pageNumber: selectedPage })}
        <PaginatorButton
          ariaDisabled={selectedPage === totalPages}
          ariaLabel={intl.formatMessage({ id: 'Terra.paginator.next' })}
          className={cx(['nav-link', 'right-controls', 'next', 'icon-only', selectedPage === totalPages && 'is-disabled'])}
          disabled={selectedPage === totalPages}
          onClick={this.handlePageChange(nextPageIndex)}
          onKeyDown={this.handlePageChange(nextPageIndex)}
        >
          <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.paginator.next' })} />
          <span className={cx('icon')} />
        </PaginatorButton>
        {
          this.hasNavContext() && (
          <PaginatorButton
            ariaDisabled={selectedPage === totalPages}
            ariaLabel={intl.formatMessage({ id: 'Terra.paginator.last' })}
            className={cx(['nav-link', 'right-controls', selectedPage === totalPages && 'is-disabled'])}
            disabled={selectedPage === totalPages}
            onClick={this.handlePageChange(totalPages)}
            onKeyDown={this.handlePageChange(totalPages)}
          >
            {intl.formatMessage({ id: 'Terra.paginator.last' })}
          </PaginatorButton>
          )
        }
      </div>
    );

    return reducedView;
  }

  render() {
    return (
      <ResponsiveElement
        onChange={this.setPaginator}
      >
        { this.state.showReducedPaginator ? this.reducedPaginator() : this.defaultPaginator()}
      </ResponsiveElement>
    );
  }
}

Paginator.propTypes = propTypes;
Paginator.contextType = ThemeContext;

export default injectIntl(Paginator);
